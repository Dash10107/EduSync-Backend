const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/Token");
const User = require("../models/User");


// Route to save progress for a subchapter
router.post("/", verifyToken, async (req, res) => {
    try {
      // Retrieve the user's ID from the token
      const userId = req.user.id;
      //debuggin
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
