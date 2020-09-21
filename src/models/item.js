import mongoose from "mongoose";
const { Schema } = mongoose;

const itemSchema = new Schema({
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
		required: function () {
			return this.category === "magic item";
		},
	},
	ac: {
		type: Number,
		required: function () {
			return this.category === "armor";
		},
	},
	weight: {
		type: Number,
		maxlength: 6,
	},
	modifier: {
		required: function () {
			return this.category === "armor";
		},
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
  damage_dice : {
    required: function () {
			return this.category === "weapon";
    },
    type: String
  },
  damage_type : {
    required: function () {
			return this.category === "weapon";
    },
    type: String,
    enum: ["piercing", "bludgeoning", "slashing", "acid",  "cold", "fire", "force", "lightning", "necrotic", "poison", "psychic", "radiant", "thunder"],
  },
  properties : {
    required: function () {
			return this.category === "weapon";
    },
    type: String,
    enum: []
  }
});

// name: name,
// type: type,
// desc: desc,
// price: price,
// rarity: rarity,
// ac: ac,
// weight: weight,
// modifier: modifier,
// damage_dice: damage_dice,
// damage_type: damage_type,
// properties: properties,
// requires_attunement: requires_attunement,
// speed: speed,
// carrying_capacity: carrying_capacity

module.exports = mongoose.model("Item", itemSchema, "Items");
