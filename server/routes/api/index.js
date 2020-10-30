const router = require("express").Router();
import itemRoutes from "./items.js";

router.use("/items", itemRoutes);

export default apiRoutes;