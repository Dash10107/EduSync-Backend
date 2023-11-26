const chaptersByModule = require("../utils/Chapters")


function getChaptersForModule(moduleId) {
    // Check if the module ID exists in the map
    if (chaptersByModule.hasOwnProperty(moduleId)) {
      return chaptersByModule[moduleId];
    } else {
      return []; // Return an empty array if the module ID is not found
    }
  }
  

  module.exports = getChaptersForModule;
