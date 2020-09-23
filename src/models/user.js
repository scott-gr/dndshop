import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
	username: {
		type: String,
		required: true,
		min: 6,
		max: 20,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		enum: ["dm", "player"],
		required: true,
	},
	groupId: {
		type: Number,
	},
});

module.exports = mongoose.model("User", UserSchema, "Users");
