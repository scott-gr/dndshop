const mongoose = require('mongoose')
const { Schema } = mongoose;

const dmSchema = new Schema({
	username: {
		type: String,
		required: true,
		min: 6,
		max: 20,
	},
	campaignName: {
		type: String,
		required: true,
		min: 2,
		max: 20,
	},
	groupId: {
		type: Number,
		required: true,
	},
	shops: {
		type: Array,
		required: true,
		max: 8,
	},
});

module.exports = mongoose.model("DM", dmSchema, "DMs");
