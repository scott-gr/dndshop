import { Item } from "../models/index.js";

export function findAll (req, res) {
  Item.find(req.query)
	.then(items => res.json(items))
	.catch(err => res.status(422).json(err));
};

export function create(req, res) {
  Item.create(req.body)
  .then(items => res.json(items))
	.catch(err => res.status(422).json(err));
}





// const create = (req, res) => {
// 	const {
// 		name,
// 		type,
// 		desc,
// 		price,
// 		rarity,
// 		ac,
// 		weight,
// 		modifier,
// 		//weapons
// 		damage_dice,
// 		damage_type,
// 		properties,
// 		//magic items
// 		requires_attunement,
// 		//mounts and vehicles only
// 		speed,
// 		carrying_capacity,
// 	} = req.body;
// 	const newItem = new Item({
// 		name: name,
// 		type: type,
// 		desc: desc,
// 		price: price,
// 		rarity: rarity,
// 		ac: ac,
// 		weight: weight,
// 		modifier: modifier,
// 		damage_dice: damage_dice,
// 		damage_type: damage_type,
// 		properties: properties,
// 		requires_attunement: requires_attunement,
// 		speed: speed,
// 		carrying_capacity: carrying_capacity,
// 	});
// 	newItem
// 		.save()
// 		.then(() =>
// 			res.json({
// 				message: "Item created successfully",
// 			})
// 		)
// 		.catch(err =>
// 			res.status(400).json({
// 				error: err,
// 				message: "Error creating item",
// 			})
// 		);
// });
