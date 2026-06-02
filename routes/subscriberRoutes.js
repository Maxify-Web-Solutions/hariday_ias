// routes/subscriberRoutes.js

const express = require("express");

const router = express.Router();

const {
  subscribeUser,
  getAllSubscribers,
  deleteSubscriber,
} = require("../controllers/subscriberController");

// SUBSCRIBE
router.post("/subscribe", subscribeUser);

// GET ALL
router.get("/", getAllSubscribers);

// DELETE
router.delete("/:id", deleteSubscriber);

module.exports = router;