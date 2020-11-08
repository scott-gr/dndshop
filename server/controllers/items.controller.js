import { Item } from "../models/index.js";

export function findAll(req, res) {
	Item.find({})
		.then(items => {
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
}

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
}
