import express from "express";
const router = express.Router();
import * as itemsController from "../../controllers/items.controller.js"

router.route("/")
	.get(itemsController.findAll)
	.post(itemsController.create);


export { router as itemRoutes }