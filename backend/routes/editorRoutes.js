const express = require("express");
const router = express.Router();

router.get("/tinymce-key", (req, res) => {
  try {
    const apiKey = process.env.TINY_MCE_API_KEY;

    if (!apiKey) {
      console.error("TinyMCE API key not found in environment variables");
      return res.status(500).json({
        error: "API key not configured",
        envExists: !!process.env.TINY_MCE_API_KEY,
      });
    }

    console.log("Sending TinyMCE API key response");
    res.json({
      apiKey,
      status: "success",
    });
  } catch (error) {
    console.error("Error in tinymce-key route:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
