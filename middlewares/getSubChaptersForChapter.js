const chaptersByModule = require("../utils/Chapters");

function getSubchaptersForChapter(chapterId, moduleId) {
    // Check if the moduleId exists in chaptersByModule data
    if (chaptersByModule.hasOwnProperty(moduleId)) {
      const moduleChapters = chaptersByModule[moduleId];
  
      // Find the chapter by ID from the moduleChapters
      const chapter = moduleChapters.find((chapter) => chapter.id === chapterId);
  
      if (chapter) {
        const subchapters = chapter.subtopics.map((subtopic) => ({
          id: subtopic.id,
          name: subtopic.name,
        }));
        return subchapters;
      }
    }
  
    return []; // Return an empty array if the module, chapter, or subtopics are not found
  }
  
  function getSubchapterLengthForChapter(chapterId, moduleId) {
    if (chaptersByModule.hasOwnProperty(moduleId)) {
      const moduleChapters = chaptersByModule[moduleId];
  
      // Find the chapter by ID from the moduleChapters
      const chapter = moduleChapters.find((chapter) => chapter.id === chapterId);
  
      if (chapter) {
        const subchapters = chapter.subtopics;
        return subchapters.length;
      }
    }
  
    return 0; // Return 0 if the module or chapter is not found
  }
  
  module.exports = {
    getSubchaptersForChapter,
    getSubchapterLengthForChapter,
  };
  
  