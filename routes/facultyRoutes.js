// routes/facultyRoutes.js

const express = require("express");

const router = express.Router();

const upload = require("../middleware/upload");

const {
  createFaculty,
  getAllFaculty,
  getSingleFaculty,
  updateFaculty,
  deleteFaculty,
} = require("../controllers/facultyController");

// ================= CREATE =================
router.post(
  "/create",
  upload.single("image"),
  createFaculty
);

// ================= GET ALL =================
router.get(
  "/all",
  getAllFaculty
);

// ================= GET SINGLE =================
router.get(
  "/:id",
  getSingleFaculty
);

// ================= UPDATE =================
router.put(
  "/update/:id",
  upload.single("image"),
  updateFaculty
);

// ================= DELETE =================
router.delete(
  "/delete/:id",
  deleteFaculty
);

module.exports = router;