const shortid = require('shortid');

// Function to generate a unique code using shortid
const generateUniqueCode = () => {
  // Generate a unique code using shortid
  const code = shortid.generate();
  return code;
};

module.exports=generateUniqueCode;