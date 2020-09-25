const mongoose = require('mongoose')
const schema = mongoose.Schema;

const itemSchema = new schema({
	id: {
		type: Number,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
		enum: [
			"weapon",
			"armor",
			"magic item",
			"tool",
			"mount/vehicle",
			"gear",
			"food and drink",
			"trade good",
			"other",
		],
	},
	description: {
		type: String,
		required: true,
		minlength: 2,
		maxlength: 100,
	},
	rarity: {
		type: String,
		enum: [
			"common",
			"uncommon",
			"rare",
			"very rare",
			"legendary",
			"artifact",
			"unknown",
		],
///required if magicitem
	},
	ac: {
		type: Number,
///required if armor
	},
	weight: {
		type: Number,
		maxlength: 6,
	},
	modifier: {
///required if armor
		ability: {
			type: String,
			enum: [
				"dexterity",
				"strength",
				"wisdom",
				"intelligence",
				"charisma",
				"constitution",
			],
		},
		max: {
			type: Number,
		},
	},
	damage_dice: {
/// required if weapon
		type: String,
	},
	damage_type: {
///required if weapon
		type: String,
		enum: [
			"piercing",
			"bludgeoning",
			"slashing",
			"acid",
			"cold",
			"fire",
			"force",
			"lightning",
			"necrotic",
			"poison",
			"psychic",
			"radiant",
			"thunder",
		],
	},
	properties: {
////required if weapon
		type: String,
		enum: [
			"ammunition",
			"finesse",
			"heavy",
			"light",
			"loading",
			"range",
			"reach",
			"special",
			"thrown",
			"two-handed",
			"verstile",
			"improvised",
			"silvered",
		],
	},
	speed: {
///required if mountvehicle
		type: Number,
	},
	carrying_capacity: {
///required if mountvehicle
		type: Number,
	},
	requires_attunement: {
///required if magicitem
		type: Boolean,
	},
});

module.exports = mongoose.model("items", itemSchema);
