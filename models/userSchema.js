import Adapters from "next-auth/adapters";
export default class User extends Adapters.TypeORM.Models.User.model {
	// You can extend the options in a model but you should not remove the base
	// properties or change the order of the built-in options on the constructor
	constructor(name, email, image, emailVerified) {
		super(name, email, image, emailVerified);
	}
}

export const UserSchema = {
	name: "User",
	target: User,
	columns: {
		...Adapters.TypeORM.Models.User.schema.columns,
		// Adds role to the User schema
		role: {
			type: String,
			enum: ["dm", "player"],
			required: true,
		},
		groupId: {
			type: Number,
		},
	},
};

// const mongoose = require('mongoose')
// const { Schema } = mongoose;

// const UserSchema = new Schema({
// 	id: {
// 		type: Number,
// 		required: true,
// 	},
// 	username: {
// 		type: String,
// 		required: true,
// 		min: 6,
// 		max: 20,
// 	},
// 	email: {
// 		type: String,
// 		required: true,
// 	},
// 	password: {
// 		type: String,
// 		required: true,
// 	},
// 	role: {
// 		type: String,
// 		enum: ["dm", "player"],
// 		required: true,
// 	},
// 	groupId: {
// 		type: Number,
// 	},
// });

// module.exports = mongoose.model("User", UserSchema, "Users");
