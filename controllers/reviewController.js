// controllers/reviewController.js

const Review = require("../models/reviewModel");
const Course = require("../models/Course");

const axios = require("axios");
const sharp = require("sharp");
const FormData = require("form-data");

// =====================================
// Upload Image To ImgBB
// =====================================
const uploadToImgBB = async (buffer, originalname) => {
  // 🔥 compress image
  const compressedBuffer = await sharp(buffer)
    .resize(600)
    .jpeg({ quality: 70 })
    .toBuffer();

  const formData = new FormData();

  formData.append("image", compressedBuffer, {
    filename: originalname,
    contentType: "image/jpeg",
  });

  const upload = await axios.post(
    `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`,
    formData,
    {
      headers: formData.getHeaders(),
      timeout: 10000,
      maxBodyLength: Infinity,
      maxContentLength: Infinity,
    }
  );

  return upload.data.data.url;
};

// =====================================
// CREATE REVIEW
// =====================================

const createReview = async (req, res) => {
  try {
    const {
      course_id,
      reviewer_name,
      rating,
      review,
      is_admin_review,
    } = req.body;

    if (!course_id || !rating || !review) {
      return res.status(400).json({
        success: false,
        message: "course_id, rating and review are required",
      });
    }

    // Check course exists
    const course = await Course.findById(course_id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    // Upload image
    let imageUrl = "";

    if (req.file) {
      imageUrl = await uploadToImgBB(
        req.file.buffer,
        req.file.originalname
      );
    }

    const newReview = await Review.create({
      user_id: is_admin_review ? null : req.user?._id || null,
      course_id,
      reviewer_name,
      image: imageUrl,
      rating,
      review,
      is_admin_review: is_admin_review || false,
    });

    return res.status(201).json({
      success: true,
      message: "Review created successfully",
      review: newReview,
    });
  } catch (error) {
    console.log("Create Review Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

// =====================================
// GET ALL REVIEWS
// =====================================
const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find()
      .populate("course_id", "title")
      .populate("user_id", "name email")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      total: reviews.length,
      reviews,
    });
  } catch (error) {
    console.log("Get All Reviews Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

// =====================================
// GET SINGLE REVIEW
// =====================================

const getSingleReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id)
      .populate("course_id", "title")
      .populate("user_id", "name email");

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Review not found",
      });
    }

    return res.status(200).json({
      success: true,
      review,
    });
  } catch (error) {
    console.log("Get Single Review Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

// =====================================
// GET REVIEWS BY COURSE
// =====================================
const getReviewsByCourse = async (req, res) => {
  try {
    const { courseId } = req.params;

    const reviews = await Review.find({
      course_id: courseId,
    })
      .populate("user_id", "name email")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      total: reviews.length,
      reviews,
    });
  } catch (error) {
    console.log("Get Reviews By Course Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

// =====================================
// UPDATE REVIEW
// =====================================

const updateReview = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      reviewer_name,
      rating,
      review,
    } = req.body;

    const existingReview = await Review.findById(id);

    if (!existingReview) {
      return res.status(404).json({
        success: false,
        message: "Review not found",
      });
    }

    // Upload new image
    let imageUrl = existingReview.image;

    if (req.file) {
      imageUrl = await uploadToImgBB(
        req.file.buffer,
        req.file.originalname
      );
    }

    existingReview.reviewer_name =
      reviewer_name || existingReview.reviewer_name;

    existingReview.rating =
      rating || existingReview.rating;

    existingReview.review =
      review || existingReview.review;

    existingReview.image = imageUrl;

    await existingReview.save();

    return res.status(200).json({
      success: true,
      message: "Review updated successfully",
      review: existingReview,
    });
  } catch (error) {
    console.log("Update Review Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

// =====================================
// DELETE REVIEW
// =====================================
const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;

    const review = await Review.findById(id);

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Review not found",
      });
    }

    await Review.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "Review deleted successfully",
    });
  } catch (error) {
    console.log("Delete Review Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = {
  createReview,
  getAllReviews,
  getSingleReview,
  getReviewsByCourse,
  updateReview,
  deleteReview,
};