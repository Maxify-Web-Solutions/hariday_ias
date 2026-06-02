const Course = require("../models/Course");
const Review = require("../models/reviewModel");

const axios = require("axios");
const FormData = require("form-data");
const sharp = require("sharp");

/* =====================================================
   🔹 HELPER: UPLOAD IMAGE TO IMGBB (FAST)
===================================================== */

const uploadToImgBB = async (buffer, originalname) => {
  // 🔥 Compress image
  const compressedBuffer = await sharp(buffer)
    .resize(900)
    .jpeg({ quality: 70 })
    .toBuffer();

  const formData = new FormData();

  formData.append("image", compressedBuffer, {
    filename: originalname,
    contentType: "image/jpeg",
  });

  const response = await axios.post(
    `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`,
    formData,
    {
      headers: formData.getHeaders(),
      timeout: 10000,
      maxBodyLength: Infinity,
      maxContentLength: Infinity,
    }
  );

  return response.data.data.url;
};

/* =====================================================
   ✅ CREATE COURSE
===================================================== */

exports.createCourse = async (req, res) => {
  try {
    let imageUrl = null;

    /* ===== IMAGE VALIDATION ===== */

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image file is required",
      });
    }

    imageUrl = await uploadToImgBB(
      req.file.buffer,
      req.file.originalname
    );

    /* ===== SAFE PARSING ===== */

    const meta_keyword = req.body.meta_keyword
      ? req.body.meta_keyword.split(",").map((v) => v.trim())
      : [];

    const learns = req.body.learns
      ? JSON.parse(req.body.learns)
      : [];

    const includes = req.body.includes
      ? JSON.parse(req.body.includes).map((i) => ({
          icon: i.icon || "",
          text: i.text,
        }))
      : [];

    const subjects = req.body.subjects
      ? JSON.parse(req.body.subjects)
      : [];

    const teachers = req.body.teachers
      ? JSON.parse(req.body.teachers)
      : [];

    /* ===== CREATE COURSE ===== */

    const course = await Course.create({
      image: imageUrl,

      title: req.body.title,
      category_id: req.body.category_id,

      premium: req.body.premium === "1",

      price: req.body.price || 0,
      discount_price: req.body.discount_price || 0,

      meta_keyword,

      short_description: req.body.short_description,

      referral_commission:
        req.body.referral_commission || 0,

      description: req.body.description,

      language: req.body.language,

      subjects,
      teachers,

      course_duration:
        req.body.course_duration || "",

      batch_start: req.body.batch_start || null,

      registration_open:
        req.body.registration_open === "true",

      registration_close_date:
        req.body.registration_close_date || null,

      learns,
      includes,

      status: true,
    });

    return res.status(201).json({
      success: true,
      message: "Course created successfully",
      course,
    });
  } catch (error) {
    console.error("Create course error:", error);

    return res.status(500).json({
      success: false,
      message: "Course creation failed",
      error: error.message,
    });
  }
};

/* =====================================================
   ✅ UPDATE COURSE
===================================================== */

exports.updateCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    let imageUrl = course.image;

    /* ===== IMAGE UPDATE (OPTIONAL) ===== */

    if (req.file) {
      imageUrl = await uploadToImgBB(
        req.file.buffer,
        req.file.originalname
      );
    }

    /* ===== SAFE PARSING ===== */

    const meta_keyword = req.body.meta_keyword
      ? req.body.meta_keyword.split(",").map((v) => v.trim())
      : [];

    const learns = req.body.learns
      ? JSON.parse(req.body.learns)
      : [];

    const includes = req.body.includes
      ? JSON.parse(req.body.includes).map((i) => ({
          icon: i.icon || "",
          text: i.text,
        }))
      : [];

    const subjects = req.body.subjects
      ? JSON.parse(req.body.subjects)
      : [];

    const teachers = req.body.teachers
      ? JSON.parse(req.body.teachers)
      : [];

    /* ===== UPDATE COURSE ===== */

    course.image = imageUrl;

    course.title = req.body.title;

    course.category_id = req.body.category_id;

    course.premium = req.body.premium === "1";

    course.price = req.body.price || 0;

    course.discount_price =
      req.body.discount_price || 0;

    course.meta_keyword = meta_keyword;

    course.short_description =
      req.body.short_description;

    course.referral_commission =
      req.body.referral_commission || 0;

    course.description = req.body.description;

    course.language = req.body.language;

    course.subjects = subjects;

    course.teachers = teachers;

    course.course_duration =
      req.body.course_duration || "";

    course.batch_start =
      req.body.batch_start || null;

    course.registration_open =
      req.body.registration_open === "true";

    course.registration_close_date =
      req.body.registration_close_date || null;

    course.learns = learns;

    course.includes = includes;

    await course.save();

    return res.status(200).json({
      success: true,
      message: "Course updated successfully",
      course,
    });
  } catch (error) {
    console.error("Update course error:", error);

    return res.status(500).json({
      success: false,
      message: "Course update failed",
      error: error.message,
    });
  }
};

/* =====================================================
   ✅ DELETE COURSE
===================================================== */

exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(
      req.params.id
    );

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Course deleted successfully",
    });
  } catch (error) {
    console.error("Delete course error:", error);

    return res.status(500).json({
      message: "Failed to delete course",
      error: error.message,
    });
  }
};

/* =====================================================
   ✅ GET SINGLE COURSE
===================================================== */

exports.getCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
      .populate("category_id")
      .populate("teacher");

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    return res.status(200).json({
      success: true,
      course,
    });
  } catch (error) {
    console.error("Get course error:", error);

    return res.status(500).json({
      message: "Failed to fetch course",
      error: error.message,
    });
  }
};

/* =====================================================
   ✅ GET ALL COURSES (WITH RATINGS)
===================================================== */

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find()
      .populate("category_id")
      .populate("teacher");

    const reviewStats = await Review.aggregate([
      {
        $group: {
          _id: "$course_id",
          review_count: { $sum: 1 },
          average_rating: { $avg: "$rating" },
        },
      },
    ]);

    const statsMap = {};

    reviewStats.forEach((item) => {
      statsMap[item._id.toString()] = {
        review_count: item.review_count,
        average_rating: item.average_rating,
      };
    });

    const finalCourses = courses.map((course) => {
      const stat = statsMap[course._id.toString()] || {
        review_count: 0,
        average_rating: 0,
      };

      return {
        ...course.toObject(),
        review_count: stat.review_count,
        average_rating:
          Number(stat.average_rating?.toFixed(1)) || 0,
      };
    });

    return res.status(200).json({
      success: true,
      courses: finalCourses,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Server error",
    });
  }
};

