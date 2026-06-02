// routes/contactUsRoutes.js

const express = require("express");

const router = express.Router();

const {
  createContact,
  getAllContacts,
  getSingleContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactUsController");

// CREATE
router.post("/create", createContact);

// GET ALL
router.get("/", getAllContacts);

// GET SINGLE
router.get("/:id", getSingleContact);

// UPDATE
router.put("/:id", updateContact);

// DELETE
router.delete("/:id", deleteContact);

module.exports = router;