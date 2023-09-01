const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = process.env.secretKey;
const verifyToken = require("../middlewares/Token");
const modules = require("../utils/Modules");
const getChaptersForModule = require("../middlewares/getChaptersForModule");
const getQuestionsForChapter = require("../middlewares/getQuestionsfromChapter");
const chapters = require("../utils/Chapters");

// Route to get a list of modules
router.get("/", verifyToken, (req, res) => {
  // Send the array of modules as a response
  res.json(modules);
});

// Route to get chapters for a specific module
router.get("/chapters/:moduleId", verifyToken, (req, res) => {
  // Retrieve the moduleId from the request parameters
  const moduleId = parseInt(req.params.moduleId); // Convert to number

  // Check if the conversion to number was successful
  if (isNaN(moduleId)) {
    return res.status(400).json({ error: "Invalid moduleId" });
  }

  // Find the module by ID from the modules data
  const module = modules.find((module) => module.id === moduleId);

  if (!module) {
    return res.status(404).json({ error: "Module not found" });
  }

  // Fetch chapters associated with the module using the getChaptersForModule function
  const moduleChapters = getChaptersForModule(moduleId); // Implement this function

  res.json({
    module,
    chapters: moduleChapters,
  });
});

// Route to get questions for a specific chapter
router.get("/questions/:chapterId", verifyToken, (req, res) => {
  // Retrieve the chapterId from the request parameters
  const chapterId = parseInt(req.params.chapterId); // Convert to number

  // Check if the conversion to number was successful
  if (isNaN(chapterId)) {
    return res.status(400).json({ error: "Invalid chapterId" });
  }

  // Find the chapter by ID from the chapters data
  const chapter = Object.values(chapters).find((moduleChapters) =>
    moduleChapters.some((chapter) => chapter.id === chapterId)
  );

  if (!chapter) {
    return res.status(404).json({ error: "Chapter not found" });
  }

  // Fetch questions associated with the chapter using the getQuestionsForChapter function
  const chapterQuestions = getQuestionsForChapter(chapterId); // Implement this function

  res.json({
    chapter,
    questions: chapterQuestions,
  });
});

module.exports = router;
