// controllers/blogController.js

const Blog = require("../models/Blog");

const sharp = require("sharp");
const axios = require("axios");
const FormData = require("form-data");

// ================= SLUG =================

const createSlug = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .replace(/\s+/g, "-");
};

// ================= IMAGE UPLOAD =================

const uploadToImgBB = async (buffer, originalname) => {
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
    }
  );

  return upload.data.data.url;
};

// ================= CREATE BLOG =================

exports.createBlog = async (req, res) => {
  try {
    const {
      highlight,
      title,
      date,
      description,
      content,
      tags,
      isPublished,
    } = req.body;

    if (!highlight || !title || !date || !description) {
      return res.status(400).json({
        success: false,
        message: "Required fields missing",
      });
    }

    let image = "";

    if (req.file) {
      image = await uploadToImgBB(
        req.file.buffer,
        req.file.originalname
      );
    }

    const slug = createSlug(title);

    const existingBlog = await Blog.findOne({ slug });

    if (existingBlog) {
      return res.status(400).json({
        success: false,
        message: "Blog title already exists",
      });
    }

    const blog = await Blog.create({
      image,
      highlight,
      title,
      slug,
      date,
      description,
      content,
      tags:
        typeof tags === "string"
          ? tags.split(",")
          : tags || [],
      isPublished,
    });

    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      data: blog,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= GET ALL BLOGS =================

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: blogs.length,
      data: blogs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= GET SINGLE BLOG =================

exports.getSingleBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    res.status(200).json({
      success: true,
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= GET BLOG BY SLUG =================

exports.getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({
      slug: req.params.slug,
    });

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    res.status(200).json({
      success: true,
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= UPDATE BLOG =================

exports.updateBlog = async (req, res) => {
  try {
    const {
      highlight,
      title,
      date,
      description,
      content,
      tags,
      isPublished,
    } = req.body;

    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    let image = blog.image;

    if (req.file) {
      image = await uploadToImgBB(
        req.file.buffer,
        req.file.originalname
      );
    }

    const slug = createSlug(title || blog.title);

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      {
        image,
        highlight,
        title,
        slug,
        date,
        description,
        content,
        tags:
          typeof tags === "string"
            ? tags.split(",")
            : tags || [],
        isPublished,
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Blog updated successfully",
      data: updatedBlog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= DELETE BLOG =================

exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    await Blog.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};