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

// Example route to check if the user is an admin
router.get("/checkAdmin", verifyToken, adminCheck, (req, res) => {
  res.json({ message: "You are an admin.",isAdmin:true });
});

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
  

// Add a single subtopic to an existing chapter
router.post("/addSubtopic/:moduleId/:chapterId", verifyToken, adminCheck, (req, res) => {
  try {
    const moduleId = parseInt(req.params.moduleId);
    const chapterId = parseInt(req.params.chapterId);

    // Get the new subtopic data from the request body
    const { name } = req.body;

    // Check if the module exists
    if (chaptersByModule[moduleId]) {
      // Find the chapter in the module's array
      const chapter = chaptersByModule[moduleId].find((ch) => ch.id === chapterId);

      if (chapter) {
        // Generate a unique subtopic ID based on the chapter ID
        const subtopicId = `${chapterId}.${chapter.subtopics.length + 1}`;

        // Create the subtopic object
        const subtopic = {
          id: subtopicId,
          name: name,
        };

        // Add the new subtopic to the chapter's subtopics array
        chapter.subtopics.push(subtopic);

        // Save the updated chapters data back to the file
        const chaptersDataPath = path.resolve(__dirname, '../utils/Chapters.js');
        const chaptersDataContent = `module.exports = ${JSON.stringify(chaptersByModule, null, 2)};\n`;
        fs.writeFileSync(chaptersDataPath, chaptersDataContent);

        return res.json({ success: true, subtopic: subtopic });
      }
    }

    return res.status(404).json({ error: 'Module or chapter not found' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to add subtopic' });
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
  
//updation

// Example route for updating module details (only accessible by admins)
router.put("/updateModule/:moduleId", verifyToken, adminCheck, async (req, res) => {
  try {
    // Get the module ID from the route parameters
    const moduleId = parseInt(req.params.moduleId);

    // Find the module with the specified moduleId
    const moduleToUpdate = modules.find((module) => module.id === moduleId);

    if (!moduleToUpdate) {
      return res.status(404).json({ error: 'Module not found' });
    }

    // Get the updated module data from the request body
    const { name, description } = req.body;

    // Update the module details
    moduleToUpdate.name = name;
    moduleToUpdate.description = description;

    // Write the updated modules data back to the file
    const modulesDataPath = path.resolve(__dirname, '../utils/Modules.js');
    const modulesDataContent = `module.exports = ${JSON.stringify(modules, null, 2)};\n`;
    fs.writeFileSync(modulesDataPath, modulesDataContent);

    res.status(200).json({ success: true, message: 'Module details updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update module details' });
  }
});

  
// Example route for updating chapters
router.put("/updateChapter/:moduleId/:chapterId", verifyToken, adminCheck, (req, res) => {
  const moduleId = parseInt(req.params.moduleId);
  const chapterId = parseInt(req.params.chapterId) - 1;
  const updatedChapter = req.body;

  if (!chaptersByModule[moduleId] || !chaptersByModule[moduleId][chapterId]) {
    // If the module or chapter doesn't exist, return an error.
    return res.status(404).json({ error: 'Module or chapter not found' });
  }

  // Update the chapter details
  chaptersByModule[moduleId][chapterId] = { ...chaptersByModule[moduleId][chapterId], ...updatedChapter };

  // Save the updated chapters data back to the file
  const chaptersDataPath = path.resolve(__dirname, '../utils/Chapters.js');
  const chaptersDataContent = `module.exports = ${JSON.stringify(chaptersByModule, null, 2)};\n`;
  fs.writeFileSync(chaptersDataPath, chaptersDataContent);

  return res.json({ success: true, message: 'Chapter updated successfully' });
});


router.put('/updateQuestions/:moduleId/:chapterId/:subChapterId', verifyToken, adminCheck, (req, res) => {
  const { moduleId, chapterId, subChapterId } = req.params;
  const { updatedQuestions } = req.body;

  // Check if the questions array for the specified combination exists
  const questionsData = moduleId <= 5 ? questions : questions2;

  if (!questionsData[moduleId] || !questionsData[moduleId][chapterId] || !questionsData[moduleId][chapterId][subChapterId]) {
      return res.status(404).json({ error: 'Module, chapter, or subchapter not found' });
  }

  // Update the questions for the specified subchapter
  questionsData[moduleId][chapterId][subChapterId] = updatedQuestions;

  // Save the updated questionsData to the file
  const filePath = moduleId <= 5 ? "./utils/Questions.js" : "./utils/Questions2.js";
  fs.writeFile(filePath, `module.exports = ${JSON.stringify(questionsData, null, 2)}`, (err) => {
      if (err) {
          return res.status(500).json({ error: 'Failed to write data to file' });
      }
      return res.json({ message: 'Questions updated successfully' });
  });
});


//deletion
// Route to delete a module by ID (accessible by admins)
router.delete("/deleteModule/:moduleId", verifyToken, adminCheck, (req, res) => {
  // Get the module ID from the route parameters
  const moduleId = parseInt(req.params.moduleId);

  // Find the index of the module with the specified ID
  const moduleIndex = modules.findIndex((module) => module.id === moduleId);

  // Check if the module exists
  if (moduleIndex === -1) {
    return res.status(404).json({ error: 'Module not found' });
  }

  // Remove the module from the modules array
  modules.splice(moduleIndex, 1);

  // Write the updated modules data back to the file
  const modulesDataPath = path.resolve(__dirname, '../utils/Modules.js');
  const modulesDataContent = `module.exports = ${JSON.stringify(modules, null, 2)};\n`;
  fs.writeFileSync(modulesDataPath, modulesDataContent);

  return res.json({ message: 'Module deleted successfully' });
});


// Route to delete a chapter by ID (accessible by admins)
router.delete("/deleteChapter/:moduleId/:chapterId", verifyToken, adminCheck, (req, res) => {
  // Get the module ID and chapter ID from the route parameters
  const moduleId = parseInt(req.params.moduleId);
  const chapterId = parseInt(req.params.chapterId);

  // Check if the module exists
  if (!chaptersByModule[moduleId]) {
    return res.status(404).json({ error: 'Module not found' });
  }

  // Find the index of the chapter with the specified ID
  const chapterIndex = chaptersByModule[moduleId].findIndex((chapter) => chapter.id === chapterId);

  // Check if the chapter exists
  if (chapterIndex === -1) {
    return res.status(404).json({ error: 'Chapter not found' });
  }

  // Remove the chapter from the chapters array
  chaptersByModule[moduleId].splice(chapterIndex, 1);

  // Write the updated chapters data back to the file
  const chaptersDataPath = path.resolve(__dirname, '../utils/Chapters.js');
  const chaptersDataContent = `module.exports = ${JSON.stringify(chaptersByModule, null, 2)};\n`;
  fs.writeFileSync(chaptersDataPath, chaptersDataContent);

  return res.json({ message: 'Chapter deleted successfully' });
});

// Route to delete questions by IDs (accessible by admins)
router.delete("/deleteQuestions/:moduleId/:chapterId/:subChapterId", verifyToken, adminCheck, (req, res) => {
  // Get the module ID, chapter ID, and subChapter ID from the route parameters
  const moduleId = parseInt(req.params.moduleId);
  const chapterId = parseInt(req.params.chapterId);
  const subChapterId = req.params.subChapterId;

  // Check if the module exists
  const questionsData = moduleId <= 5 ? questions : questions2;

  if (!questionsData[moduleId] || !questionsData[moduleId][chapterId] || !questionsData[moduleId][chapterId][subChapterId]) {
    return res.status(404).json({ error: 'Module, chapter, or subchapter not found' });
  }

  // Remove the questions from the specified subchapter
  questionsData[moduleId][chapterId][subChapterId] = [];

  // Write the updated questions data back to the file
  const filePath = moduleId <= 5 ? './utils/Questions.js' : './utils/Questions2.js';
  fs.writeFile(filePath, `module.exports = ${JSON.stringify(questionsData, null, 2)}`, (err) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to write data to file' });
    }

    return res.json({ message: 'Questions deleted successfully' });
  });
});



module.exports = router;