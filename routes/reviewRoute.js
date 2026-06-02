// routes/reviewRoutes.js

const express = require("express");
const router = express.Router();

const multer = require("multer");

const {
  createReview,
  getAllReviews,
  getSingleReview,
  getReviewsByCourse,
  updateReview,
  deleteReview,
} = require("../controllers/reviewController");

const storage = multer.memoryStorage();

const upload = multer({
  storage,
});

// CREATE
router.post(
  "/create",
  upload.single("image"),
  createReview
);

// GET ALL
router.get("/", getAllReviews);

// GET SINGLE
router.get("/:id", getSingleReview);

// GET BY COURSE
router.get("/course/:courseId", getReviewsByCourse);

// UPDATE
router.put(
  "/update/:id",
  upload.single("image"),
  updateReview
);

// DELETE
router.delete("/delete/:id", deleteReview);

module.exports = router;