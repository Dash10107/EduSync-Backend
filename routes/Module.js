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
const questions = require("../utils/Questions")
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

/// Route to get questions for a specific module, chapter, and subchapter
router.get("/questions/:moduleId/:chapterId/:subchapterId", verifyToken, (req, res) => {
  // Retrieve the module, chapter, and subchapter IDs from the request parameters
  const moduleId = parseInt(req.params.moduleId);
  const chapterId = req.params.chapterId;
  const subchapterId = req.params.subchapterId;

  // Check if the conversion to number was successful for moduleId
  if (isNaN(moduleId)) {
    return res.status(400).json({ error: "Invalid moduleId" });
  }

  // Find the module by ID from the questions data
  const module = questions[moduleId];

  if (!module) {
    return res.status(404).json({ error: "Module not found" });
  }

  // Find the chapter by ID from the module
  const chapter = module[chapterId];

  if (!chapter) {
    return res.status(404).json({ error: "Chapter not found" });
  }

  // Find the subchapter by ID from the chapter
  const subchapter = chapter[subchapterId];

  if (!subchapter) {
    return res.status(404).json({ error: "Subchapter not found" });
  }

  // Fetch questions associated with the subchapter
  const subchapterQuestions = subchapter;

  res.json({
    // module,
    // chapter,
    // subchapter,
    questions: subchapterQuestions,
  });
});



module.exports = router;
