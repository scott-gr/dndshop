import express from "express";
import { itemRoutes } from "./items.js";
const router = express.Router();

router.use("/items", itemRoutes);

export { router as apiRoutes }