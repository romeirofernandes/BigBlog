const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");

router.post("/", async (req, res) => {
  try {
    console.log("Received feedback:", req.body); // Debug log

    if (!req.body.feedback) {
      return res.status(400).json({ message: "Feedback content is required" });
    }

    const feedback = new Feedback({
      email: req.body.email || "",
      feedback: req.body.feedback,
    });

    const savedFeedback = await feedback.save();
    console.log("Saved feedback:", savedFeedback); // Debug log

    res.status(201).json(savedFeedback);
  } catch (error) {
    console.error("Feedback error:", error); // Debug log
    res
      .status(400)
      .json({ message: error.message || "Error submitting feedback" });
  }
});

module.exports = router;
