require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path"); 
const connectdb = require("./config/connectdb");


const app = express();

const dns = require("dns");
dns.setServers(["1.1.1.1", "1.0.0.1", "8.8.8.8", "8.8.4.4"]);

app.use(cookieParser());

// middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
            "http://localhost:5175",

    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
const authRoutes = require("./routes/authRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const courseRoutes = require("./routes/courseRoutes");
const reviewRoutes = require("./routes/reviewRoute");
const facultyRoutes = require("./routes/facultyRoutes");
const blogRoutes = require("./routes/blogRoutes");
const contactUsRoutes = require("./routes/contactUsRoutes");
const subscriberRoutes = require("./routes/subscriberRoutes");




app.use("/api/auth", authRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/course", courseRoutes);
app.use("/api/review", reviewRoutes);
app.use("/api/faculty", facultyRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/contact-us", contactUsRoutes);
app.use("/api/subscribers", subscriberRoutes);



// production setup
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./IasHariday", "dist")));

  app.use((req, res) => {
    res.sendFile(path.join(__dirname, "./IasHariday", "dist", "index.html")); 
  });
}

connectdb()

// start server
const PORT = process.env.PORT || 5000; // ✅ FIXED

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});