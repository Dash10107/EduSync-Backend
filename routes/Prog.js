const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/Token");
const User = require("../models/User");
const validateProgressInput = require("../validation/progress");
const getChaptersForModule = require("../middlewares/getChaptersForModule");
const { getSubchaptersForChapter, getSubchapterLengthForChapter } = require("../middlewares/getSubChaptersForChapter");
const chaptersByModule=require("../utils/Chapters")
// Import the validation function
// Route to fetch progress for a user
router.get("/", verifyToken, async (req, res) => {
  try {
    // Retrieve the user's ID from the token
    const userId = req.user.id;

    // Define a variable to store the total subchapter count
    let totalSubchapters = 0;

    // Loop through all subjects and chapters to count subchapters
    for (const subjectId in chaptersByModule) {
      const chapters = chaptersByModule[subjectId];
      for (const chapter of chapters) {
        totalSubchapters += chapter.subtopics.length;
      }
    }
    console.log(totalSubchapters);
    // Find the user by ID
    const user = await User.findById(userId);

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Calculate progress percentage based on user's progress data
    const progressPercentage = (user.progress.length / totalSubchapters) * 100;

    // Return the progress percentage
    res.json({ progressPercentage });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch progress" });
  }
});


// Route to get progress based on module ID
router.get("/:moduleId", verifyToken, async (req, res) => {
  try {
    // Retrieve the user's ID from the token
    const userId = req.user.id;

    // Retrieve the module ID from the request parameters
    const moduleId = parseInt(req.params.moduleId);

    // Find the user by ID
    const user = await User.findById(userId);

    // Check if there is progress data for the given module ID
    const moduleProgress = user.progress.filter(
      (progress) => progress.moduleId === moduleId
    );
      
    // Fetch all chapters in the module (You should fetch chapters based on moduleId)
    const moduleChapters = await getChaptersForModule(moduleId);
    
    // Create an array to store progress percentages for all chapters
    const progressPercentages = [];

    // Loop through all chapters and calculate the progress percentage for each
    for (const chapter of moduleChapters) {
      const chapterId = chapter.id;
      const chapterProgress = moduleProgress.filter(
        (progress) => progress.chapterId === chapterId
      );

      const totalSubchapterLength = getSubchapterLengthForChapter(
        chapterId,
        moduleId
      );
        
      // Calculate the progress percentage
      const progressPercentage =
        (chapterProgress.length / totalSubchapterLength) * 100;

      // Store the progress percentage in the array
      progressPercentages.push({ chapterId, progressPercentage });
    }

    res.json({ success: true, progressPercentages });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch progress" });
  }
});


// Route to get progress based on module and chapter IDs
router.get("/:moduleId/:chapterId", verifyToken, async (req, res) => {
  try {
    // Retrieve the user's ID from the token
    const userId = req.user.id;

    // Retrieve the module ID and chapter ID from the request parameters
    const moduleId = parseInt(req.params.moduleId);
    const chapterId = parseInt(req.params.chapterId);

    // Find the user by ID
    const user = await User.findById(userId);
    // Retrieve all chapters in the module (You should fetch chapters based on moduleId)
    // const moduleChapters = await getChaptersForModule(moduleId);
    // Get the subchapters for the specified chapter
    // const subchapters = getSubchaptersForChapter(chapterId, moduleId);

    // Get the total length of subchapters in the chapter
    const totalSubchapterLength = getSubchapterLengthForChapter(chapterId, moduleId);

    // Check if there is progress data for the given module and chapter IDs
    const chapterProgress = user.progress.filter(
      (progress) =>
        progress.moduleId === moduleId && progress.chapterId === chapterId
    );   
    // Calculate the progress percentage
    const progressPercentage =
      (chapterProgress.length / totalSubchapterLength) * 100;


    res.json({ success: true, chapterProgress, progressPercentage });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch progress" });
  }
});


// Route to get progress based on moduleId, chapterId, and subChapterId
router.get("/:moduleId/:chapterId/:subChapterId", verifyToken, async (req, res) => {
  try {

      
    // Retrieve the user's ID from the token
    const userId = req.user.id;

    // Retrieve the parameters from the request URL
    const moduleId = parseInt(req.params.moduleId);
    const chapterId = parseInt(req.params.chapterId);
    const subChapterId = req.params.subChapterId;
    
    // Find the user by ID
    const user = await User.findById(userId);

    // Find the progress data that matches the provided moduleId, chapterId, and subChapterId
    const progress = user.progress.find(
      (progress) =>
        progress.moduleId === moduleId &&
        progress.chapterId === chapterId &&
        progress.subchapterId === subChapterId
    );

    if (!progress) {
      return res.status(404).json({ error: "Progress data not found" });
    }

    res.json({ success: true, progress });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch progress" });
  }
});



// Route to save progress for a subchapter
router.post("/", verifyToken, async (req, res) => {
    try {
      const {errors,isValid} = validateProgressInput(req.body);
      if(!isValid){
          return res.status(400).json(errors);
      }
      // Retrieve the user's ID from the token
      const userId = req.user.id;
      //debugging
      console.log(req.user);
        console.log(req.body)
      // Retrieve data from the request body
      const { moduleId, chapterId, subchapterId, correctAnswers, totalQuestions } = req.body;


      // Calculate the correct percentage
      const correctPercentage = (correctAnswers / totalQuestions) * 100;
    
      // Find the user by ID
      const user = await User.findById(userId);
  
      // Check if there is existing progress data for the given module, chapter, and subchapter
      const existingProgress = user.progress.find(
        (progress) =>
          progress.moduleId === moduleId &&
          progress.chapterId === chapterId &&
          progress.subchapterId === subchapterId
      );
  
      if (existingProgress) {
        // Update the existing progress data
        existingProgress.correctPercentage = correctPercentage;
      } else {
        // Create a new progress object
        user.progress.push({
          moduleId,
          chapterId,
          subchapterId,
          correctPercentage,
        });
      }
  
      // Save the updated user document
      await user.save();
  
      res.json({ success: true, message: "Progress saved successfully" });

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  });
  
module.exports = router;

