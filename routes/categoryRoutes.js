const express = require("express");
const { createCategory, getAllCategories, getCategoryBySlug, updateCategory, deleteCategory, getCategoryById, getCoursesByCategorySlug, getCoursesByCategoryId } = require("../controllers/categoryController"
);
const upload = require("../middleware/upload");
const { isAuthenticated, isAdmin } = require("../middleware/authMiddleware");
const router = express.Router();


router.post("/create",isAuthenticated, isAdmin,upload.single("image"), createCategory);
router.get("/all", getAllCategories);
router.get("/slug/:slug", isAuthenticated, isAdmin,getCategoryBySlug);
router.get("/:id",isAuthenticated, isAdmin, getCategoryById);
router.put("/update/:id",isAuthenticated, isAdmin,upload.single("image"), updateCategory);
router.delete("/delete/:id",isAuthenticated, isAdmin, deleteCategory);
router.get("/:id/courses",isAuthenticated, isAdmin, getCoursesByCategoryId);
router.get("/:slug/courses", isAuthenticated, isAdmin,getCoursesByCategorySlug);


module.exports = router;
