const express = require("express");
const {
  generateWhiteboard,
} = require("../services/geminiService");

const router = express.Router();

router.post("/generate", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt || !prompt.trim()) {
      return res.status(400).json({
        success: false,
        error: "Prompt is required",
      });
    }

    console.log("Prompt received:", prompt);

    const result = await generateWhiteboard(prompt);

    console.log("Raw Gemini response:", result);

    let whiteboardData;

    try {
      whiteboardData = JSON.parse(result);
    } catch (error) {
      console.error(
        "Invalid Gemini JSON:",
        result
      );

      return res.status(500).json({
        success: false,
        error: "Gemini returned invalid JSON",
      });
    }

    return res.json({
      success: true,
      data: whiteboardData,
    });

  } catch (error) {
    console.error(
      "AI Route Error:",
      error
    );

    return res.status(500).json({
      success: false,
      error: "Failed to generate whiteboard",
    });
  }
});

module.exports = router;