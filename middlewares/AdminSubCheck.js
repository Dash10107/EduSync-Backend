const User = require("../models/User");

module.exports = async function (req, res, next) {
  try {
    // Find the user by their ID in the database
    const user = await User.findById(req.user.id);

    if ((user && user.isSubAdmin) ||  (user && user.isAdmin) ) {
      // The user is an admin, so proceed to the next middleware/route
      next();
    } else {
      // The user is not an admin, return an error
      return res.status(403).json({ message: "Permission denied." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
