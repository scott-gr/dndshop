import { Item } from "../models/index.js";

export function findAll (req, res) {
  Item.find({})
  .then(items =>  {
    res.json({
      error: false,
      data: items,
      message: "Successfully retrieved all item data.",
    });
  })
  .catch(err => {
  res.status(500).json({
    error: true,
    data: null,
    message: "Error retrieving item data.",
  });
});

export function create(req, res) {
  Item.create(req.body)
  .then(items => res.json(items))
	.catch(err => {
    res.status(500).json({
    error: true,
    data: null,
    message: "Error adding new item to database.",
  });
});





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
// })
