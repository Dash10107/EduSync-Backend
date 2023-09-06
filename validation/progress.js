const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateProgressInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  const moduleId = !isEmpty(data.moduleId) ? String(data.moduleId) : "";
  const chapterId = !isEmpty(data.chapterId) ? String(data.chapterId) : "";
  const subchapterId = !isEmpty(data.subchapterId) ? String(data.subchapterId) : "";
  const correctAnswers = !isEmpty(data.correctAnswers) ? String(data.correctAnswers) : "";
  const totalQuestions = !isEmpty(data.totalQuestions) ? String(data.totalQuestions) : "";

  // Module ID checks
  if (Validator.isEmpty(moduleId)) {
    errors.moduleId = "Module ID field is required";
  }

  // Chapter ID checks
  if (Validator.isEmpty(chapterId)) {
    errors.chapterId = "Chapter ID field is required";
  }

  // Subchapter ID checks
  if (Validator.isEmpty(subchapterId)) {
    errors.subchapterId = "Subchapter ID field is required";
  } else {
    // Check if chapterId and first part of subchapterId are the same
    const chapterIdParts = chapterId.split(".");
    const subchapterIdParts = subchapterId.split(".");
  
    if (chapterIdParts[0] !== subchapterIdParts[0]) {
      errors.chapterId = "Chapter ID and Subchapter ID must have the same first part";
      errors.subchapterId = "Chapter ID and Subchapter ID must have the same first part";
    }
  }

  // Correct Answers checks
  if (Validator.isEmpty(correctAnswers)) {
    errors.correctAnswers = "Correct Answers field is required";
  }

  // Total Questions checks
  if (Validator.isEmpty(totalQuestions)) {
    errors.totalQuestions = "Total Questions field is required";
  }

  // Check if correctAnswers is greater than totalQuestions
  if (parseInt(correctAnswers) > parseInt(totalQuestions)) {
    errors.correctAnswers = "Correct Answers cannot be greater than Total Questions";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
