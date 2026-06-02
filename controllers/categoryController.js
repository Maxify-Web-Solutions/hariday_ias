const axios = require("axios");
const FormData = require("form-data");
const sharp = require("sharp");
const slugify = require("slugify");

const Category = require("../models/Category");
const Course = require("../models/Course");

/* =====================================================
   🔹 HELPER: FAST IMAGE UPLOAD (IMGBB)
===================================================== */
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

/* =====================================================
   ✅ CREATE CATEGORY
===================================================== */
exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    if (!req.file) {
      return res.status(400).json({ message: "Image file is required" });
    }

    // 🚀 upload image (fast)
    const imageUrl = await uploadToImgBB(
      req.file.buffer,
      req.file.originalname
    );

    // 🔥 auto slug
    const slug = slugify(name, { lower: true, strict: true });

    const category = await Category.create({
      name,
      slug,
      image: imageUrl,
    });

    return res.status(201).json({
      success: true,
      message: "Category created successfully",
      category,
    });
  } catch (error) {
    console.error("Create category error:", error);
    return res.status(500).json({
      success: false,
      message: "Category creation failed",
    });
  }
};

/* =====================================================
   ✅ GET ALL CATEGORIES (WITH COURSE COUNT)
===================================================== */
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.aggregate([
      {
        $lookup: {
          from: "courses",
          localField: "_id",
          foreignField: "category_id",
          as: "courses",
        },
      },
      {
        $addFields: {
          totalCourses: { $size: "$courses" },
        },
      },
      {
        $project: {
          courses: 0,
        },
      },
      {
        $sort: { createdAt: -1 },
      },
    ]);

    return res.status(200).json({
      success: true,
      total: categories.length,
      categories,
    });
  } catch (error) {
    console.error("Get categories error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

/* =====================================================
   ✅ GET CATEGORY BY SLUG
===================================================== */
exports.getCategoryBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const category = await Category.findOne({ slug });

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json({
      success: true,
      category,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

/* =====================================================
   ✅ GET CATEGORY BY ID
===================================================== */
exports.getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await Category.findById(id);

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json({
      success: true,
      category,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

/* =====================================================
   ✅ UPDATE CATEGORY
===================================================== */
exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    // 🔥 image update (optional)
    if (req.file) {
      category.image = await uploadToImgBB(
        req.file.buffer,
        req.file.originalname
      );
    }

    if (name) {
      category.name = name;
      category.slug = slugify(name, { lower: true, strict: true });
    }

    await category.save();

    res.status(200).json({
      success: true,
      message: "Category updated successfully",
      category,
    });
  } catch (error) {
    console.error("Update category error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

/* =====================================================
   ✅ DELETE CATEGORY
===================================================== */
exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await Category.findByIdAndDelete(id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

/* =====================================================
   ✅ GET COURSES BY CATEGORY SLUG (FIXED)
===================================================== */
exports.getCoursesByCategorySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const category = await Category.findOne({ slug });
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    const courses = await Course.find({ category_id: category._id })
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      category_name: category.name,
      total: courses.length,
      courses,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

/* =====================================================
   ✅ GET COURSES BY CATEGORY ID
===================================================== */
exports.getCoursesByCategoryId = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await Category.findById(id).lean();
    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    const courses = await Course.find({ category_id: id })
      .sort({ createdAt: -1 })
      .lean();

    return res.status(200).json({
      success: true,
      category_name: category.name,
      category_id: id,
      total_courses: courses.length,
      courses,
    });
  } catch (error) {
    console.error("Error getting courses by category:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
