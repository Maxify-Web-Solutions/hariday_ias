// controllers/subscriberController.js

const Subscriber = require("../models/Subscriber");

// ================= SUBSCRIBE =================

exports.subscribeUser = async (req, res) => {
  try {
    console.log("BODY =>", req.body);

    const { email } = req.body;

    console.log("EMAIL =>", email);

    const existingSubscriber = await Subscriber.findOne({ email });

    console.log("EXISTING =>", existingSubscriber);

    if (existingSubscriber) {
      return res.status(400).json({
        success: false,
        message: "Email already subscribed",
      });
    }

    const subscriber = await Subscriber.create({ email });

    console.log("CREATED =>", subscriber);

    res.status(201).json({
      success: true,
      message: "Subscribed successfully",
      data: subscriber,
    });

  } catch (error) {
    console.log("ERROR =>", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ================= GET ALL SUBSCRIBERS =================

exports.getAllSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: subscribers.length,
      data: subscribers,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ================= DELETE SUBSCRIBER =================

exports.deleteSubscriber = async (req, res) => {
  try {
    const subscriber = await Subscriber.findByIdAndDelete(
      req.params.id
    );

    if (!subscriber) {
      return res.status(404).json({
        success: false,
        message: "Subscriber not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Subscriber deleted successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};