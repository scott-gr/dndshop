import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
	id: {
		type: Number,
		required: true,
	},
	username: {
		type: String,
		required: true,
		min: 6,
		max: 20,
	},
	characterName: {
		type: String,
		required: true,
		min: 2,
		max: 20,
	},
	groupId: {
		type: Number,
		required: true,
	},
	money: {
		platinum: {
			type: Number,
			min: 0,
			max: 100000000,
		},
		gold: {
			type: Number,
			min: 0,
			max: 100000000,
		},
		electrum: {
			type: Number,
			min: 0,
			max: 100000000,
		},
		silver: {
			type: Number,
			min: 0,
			max: 100000000,
		},
		copper: {
			type: Number,
			min: 0,
			max: 100000000,
		},
	},
});

const Player = mongoose.model("Player", PlayerSchema);

export { Player };
