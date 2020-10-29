import express from "express";
import path from "path";
const PORT = process.env.PORT || 3001;
const app = express();
import dotenv from "dotenv";
import connectDB from "./config/db.js"
import itemsRouter from "./routes/api/items.js";

dotenv.config();

connectDB();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

//api routes

app.use("/items", itemsRouter);

app.get("*", function (req, res) {
	res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// mongoose
// 	.connect(process.env.REACT_APP_MONGODB_URI, {
// 		useNewUrlParser: true,
// 		useCreateIndex: true,
// 		useUnifiedTopology: true,
// 	})
// mongoose.connection.on('connected', ()=> {
// 	console.log('Mongoose is connected to MongoDB Atlas')
// })

// export async function setUpDb(db) {
// 	db.collection("items").createIndex({ createdAt: -1 });
// 	db.collection("users").createIndex({ email: 1 }, { unique: true });
// }

// export default async function database(req, res, next) {
// 	if (!client.isConnected()) await client.connect();
// 	req.dbClient = client;
// 	req.db = client.db(process.env.REACT_APP_MONGODB_DB);
// 	await setUpDb(req.db);
// 	return next();
// }

app.listen(PORT, function () {
	console.log(`🌎 ==> API server now on port ${PORT}!`);
});
