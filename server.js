import express from "express";
// import path from "path";
import dotenv from "dotenv";
import connectDB from "./server/config/db.js";
import { router } from "./server/routes/index.js";
const PORT = process.env.PORT || 3001;
const app = express();

dotenv.config();

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets 
app.use(express.static("client/build"));

//api routes
app.use(router);

//connect to mongo atlas db
connectDB();

//start api server
app.listen(PORT, function () {
	console.log(`🌎 ==> API server now on port ${PORT}!`);
});
