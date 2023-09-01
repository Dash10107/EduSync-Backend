const questionsByChapter = require("../utils/Questions")

function getQuestionsForChapter(chapterId) {
    // Filter questions based on the chapterId
    if (questionsByChapter.hasOwnProperty(chapterId)) {
      return questionsByChapter[chapterId];
    } else {
      return []; // Return an empty array if the module ID is not found
    }
  }

  module.exports = getQuestionsForChapter;