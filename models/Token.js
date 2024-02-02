const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User")

const tokenSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: User,
		unique: true,
	},
	token: { type: String, required: true },
	createdAt: { type: Date, default: Date.now, expires: 3600 },
});

module.exports = mongoose.model("token", tokenSchema);

const Token = mongoose.model("Token",tokenSchema);

module.exports = Token;