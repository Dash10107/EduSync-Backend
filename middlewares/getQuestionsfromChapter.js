const questions = require("../utils/Questions")


// Modify the getQuestionsForChapter function
function getQuestionsForChapter(chapterId, subtopicId) {
  // Check if the chapterId exists in questions data
  if (questions.hasOwnProperty(chapterId)) {
    const chapter = questions[chapterId];
    
    // Check if the subtopicId exists in the chapter
    if (chapter.hasOwnProperty(subtopicId)) {
      return chapter[subtopicId];
    }
  }
  
  return []; // Return an empty array if the chapter or subtopic is not found
}

module.exports = getQuestionsForChapter;
