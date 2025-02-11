const express = require("express");
const mongoose = require("mongoose");
const connectdb = require("./config/db");
const dotenv = require("dotenv");
const postRoutes = require("./routes/postRoutes");
const cors = require("cors");
const feedbackRoutes = require("./routes/feedback");
const authRoutes = require("./routes/authRoutes");
const editorRoutes = require("./routes/editorRoutes");

dotenv.config();

const app = express();

// CORS configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use("/api/posts", postRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/editor", editorRoutes);

// Database connection
connectdb();

// Basic error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(500)
    .json({ message: "Something went wrong!", error: err.message });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server successfully started at http://localhost:${PORT}/`);
});
