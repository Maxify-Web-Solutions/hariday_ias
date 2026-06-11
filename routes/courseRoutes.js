const express = require("express");
const upload = require("../middleware/upload");
const { createCourse, getAllCourses, getCourse, updateCourse, deleteCourse, getCourseContentByCourseId, updateCourseCommission } = require("../controllers/courseController");
const router = express.Router();
const { isAuthenticated, isAdmin } = require("../middleware/authMiddleware");


router.post("/create-course",isAuthenticated, isAdmin, upload.single("image"), createCourse);


router.get("/all",getAllCourses);

router.get("/:id", getCourse);

router.put("/update/:id", isAuthenticated, isAdmin,upload.single("image"), updateCourse);

// DELETE
router.delete("/delete/:id",isAuthenticated, isAdmin, deleteCourse);




module.exports = router;
