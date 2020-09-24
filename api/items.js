//gatsby stuff.. update for nextjs


const express = require("express");
const router = express.Router();

const Item = require("../models/item");

router.get("/", (req, res) => {
	Item.find()
		.then(items => res.json(items))
		.catch(err => console.log(err));
});

router.post("/", (req, res) => {
	const {
		name,
		type,
		desc,
		price,
		rarity,
		ac,
		weight,
		modifier,
		//weapons
		damage_dice,
		damage_type,
		properties,
		//magic items
		requires_attunement,
		//mounts and vehicles only
		speed,
		carrying_capacity,
	} = req.body;
	const newItem = new Item({
		name: name,
		type: type,
		desc: desc,
		price: price,
		rarity: rarity,
		ac: ac,
		weight: weight,
		modifier: modifier,
		damage_dice: damage_dice,
		damage_type: damage_type,
		properties: properties,
		requires_attunement: requires_attunement,
		speed: speed,
		carrying_capacity: carrying_capacity,
	});
	newItem
		.save()
		.then(() =>
			res.json({
				message: "Item created successfully",
			})
		)
		.catch(err =>
			res.status(400).json({
				error: err,
				message: "Error creating item",
			})
		);
});
module.exports = router;
