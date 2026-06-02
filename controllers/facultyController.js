// controllers/facultyController.js

const Faculty = require("../models/facultyModel");
const sharp = require("sharp");
const axios = require("axios");
const FormData = require("form-data");

// ================= Upload Image =================

const uploadToImgBB = async (buffer, originalname) => {
  const compressedBuffer = await sharp(buffer)
    .resize(900)
    .jpeg({ quality: 70 })
    .toBuffer();

  const formData = new FormData();

  formData.append("image", compressedBuffer, {
    filename: originalname,
    contentType: "image/jpeg",
  });

  const response = await axios.post(
    `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`,
    formData,
    {
      headers: formData.getHeaders(),
      timeout: 10000,
      maxBodyLength: Infinity,
      maxContentLength: Infinity,
    }
  );

  return response.data.data.url;
};

// ================= Create Faculty =================

exports.createFaculty = async (req, res) => {
  try {
    const { name, designation, experience } = req.body;

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image is required",
      });
    }

    const image = await uploadToImgBB(
      req.file.buffer,
      req.file.originalname
    );

    const faculty = await Faculty.create({
      image,
      name,
      designation,
      experience,
    });

    res.status(201).json({
      success: true,
      message: "Faculty created successfully",
      faculty,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= Get All Faculty =================

exports.getAllFaculty = async (req, res) => {
  try {
    const faculties = await Faculty.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      faculties,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= Get Single Faculty =================

exports.getSingleFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.findById(req.params.id);

    if (!faculty) {
      return res.status(404).json({
        success: false,
        message: "Faculty not found",
      });
    }

    res.status(200).json({
      success: true,
      faculty,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= Update Faculty =================

exports.updateFaculty = async (req, res) => {
  try {
    const { name, designation, experience } = req.body;

    const faculty = await Faculty.findById(req.params.id);

    if (!faculty) {
      return res.status(404).json({
        success: false,
        message: "Faculty not found",
      });
    }

    let image = faculty.image;

    if (req.file) {
      image = await uploadToImgBB(
        req.file.buffer,
        req.file.originalname
      );
    }

    faculty.name = name || faculty.name;
    faculty.designation = designation || faculty.designation;
    faculty.experience = experience || faculty.experience;
    faculty.image = image;

    await faculty.save();

    res.status(200).json({
      success: true,
      message: "Faculty updated successfully",
      faculty,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= Delete Faculty =================

exports.deleteFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.findById(req.params.id);

    if (!faculty) {
      return res.status(404).json({
        success: false,
        message: "Faculty not found",
      });
    }

    await faculty.deleteOne();

    res.status(200).json({
      success: true,
      message: "Faculty deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};