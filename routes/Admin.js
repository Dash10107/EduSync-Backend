const express = require("express");
const router = express.Router();
const adminCheck = require("../middlewares/Admin");
const verifyToken = require("../middlewares/Token");
// Load the existing modules data
const modules = require('../utils/Modules');
const chaptersByModule = require("../utils/Chapters");
const fs = require('fs');
const path = require('path');

const questions = require("../utils/Questions");
const questions2 = require("../utils/Questions2")
// Example route for adding modules (only accessible by admins)
router.post("/addModule", verifyToken, adminCheck, async (req, res) => {
    try {
      // Get the new module data from the request body
      const { name, description } = req.body;
  
      // Check if a module with the same name already exists
      const isDuplicateModule = modules.some((module) => module.name === name);
  
      if (isDuplicateModule) {
        // Module with the same name already exists
        return res.status(400).json({ error: 'Module with the same name already exists' });
      }
  
      // Define the new module
      const newModule = {
        id: modules.length + 1, // Increment the ID for the new module
        name,
        description,
      };
  
      // Add the new module to the modules array
      modules.push(newModule);
  
      // Write the updated modules data back to the file
      const modulesDataPath = path.resolve(__dirname, '../utils/Modules.js');
      const modulesDataContent = `module.exports = ${JSON.stringify(modules, null, 2)};\n`;
      fs.writeFileSync(modulesDataPath, modulesDataContent);
  
      // Log the newly added module
      console.log('New module added:', newModule);
  
      res.status(201).json({ success: true, message: 'Module added successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to add module' });
    }
  });
  
// Example route for adding chapters (only accessible by admins)
router.post("/addChapter/:moduleId", verifyToken, adminCheck, async (req, res) => {
    try {
      // Get the module ID from the route parameters
      const moduleId = parseInt(req.params.moduleId);
  
      // Get the new chapter data from the request body
      const { title, content, subtopics } = req.body;
  
      // Check if the chapters for the specific module exist
      if (!chaptersByModule[moduleId]) {
        // If not, create a new array for the chapters
        chaptersByModule[moduleId] = [];
      }
  
      // Check if a chapter with the same title already exists
      const chapterWithTitle = chaptersByModule[moduleId].find(
        (chapter) => chapter.title === title
      );
  
      if (chapterWithTitle) {
        return res.status(400).json({ error: 'Chapter with the same title already exists' });
      }
  
      // Calculate the new chapter ID based on the existing chapters
      const newChapterId = chaptersByModule[moduleId].length + 1;
  
      // Define the new chapter
      const newChapter = {
        id: newChapterId,
        title,
        content,
        subtopics,
      };
  
      // Push the new chapter to the chapters array for the specified module
      chaptersByModule[moduleId].push(newChapter);
  
      // Write the updated chapters data back to the file
      const fs = require('fs');
      const path = require('path');
      const chaptersDataPath = path.resolve(__dirname, '../utils/Chapters.js');
      const chaptersDataContent = `module.exports = ${JSON.stringify(chaptersByModule, null, 2)};\n`;
      fs.writeFileSync(chaptersDataPath, chaptersDataContent);
  
      res.status(201).json({ success: true, message: 'Chapter added successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to add chapter' });
    }
  });
  

 
  
  router.post('/addQuestions/:moduleId/:chapterId/:subChapterId', verifyToken, adminCheck, (req, res) => {
    // Get the module ID from the route parameters
    const moduleId = parseInt(req.params.moduleId);
    const { chapterId, subChapterId } = req.params;
    const { questions } = req.body;
    const questionsData = moduleId <= 5 ? questions : questions2;
    const filePath = moduleId <= 5 ? "./utils/Questions.js" : "./utils/Questions2.js";
  
    if (!questions || !Array.isArray(questions)) {
      return res.status(400).json({ error: 'Invalid questions data' });
    }
  
    // Check if questionsData and its nested objects exist
    if (!questionsData[moduleId]) {
      questionsData[moduleId] = {};
    }
    if (!questionsData[moduleId][chapterId]) {
      questionsData[moduleId][chapterId] = {};
    }
  
    // Check if questions already exist for the specified combination
    if (!questionsData[moduleId][chapterId][subChapterId]) {
      // If it doesn't exist, you can set it directly to the new questions
      questionsData[moduleId][chapterId][subChapterId] = questions;
    } else if (questionsData[moduleId][chapterId][subChapterId].length > 0) {
      return res.status(400).json({ error: 'Questions already exist for this combination' });
    }
  
    // Save the updated questionsData to a file
    fs.writeFile(filePath, `module.exports = ${JSON.stringify(questionsData, null, 2)}`, (err) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to write data to file' });
      }
  
      return res.json({ message: 'Questions added successfully' });
    });
  });
  

  


module.exports = router;