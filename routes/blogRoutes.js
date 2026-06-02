// routes/blogRoutes.js

const express = require("express");

const router = express.Router();

const upload = require("../middleware/upload");

const {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  getBlogBySlug,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

// ================= CRUD ROUTES =================

router.post(
  "/create",
  upload.single("image"),
  createBlog
);

router.get("/all", getAllBlogs);

router.get("/slug/:slug", getBlogBySlug);

router.get("/:id", getSingleBlog);

router.put(
  "/update/:id",
  upload.single("image"),
  updateBlog
);

router.delete("/delete/:id", deleteBlog);

module.exports = router;