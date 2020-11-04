import express from "express";
// import path from "path";
import dotenv from "dotenv";
import connectDB from "./server/config/db.js";
import { router } from "./server/routes/index.js";
const PORT = process.env.PORT || 3001;
const app = express();

dotenv.config();

connectDB();

// Serve up static assets (usually on heroku)
app.use(express.static("client/build"));


//api routes

app.use(router);


app.listen(PORT, function () {
	console.log(`🌎 ==> API server now on port ${PORT}!`);
});
