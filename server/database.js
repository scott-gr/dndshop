const mongoose = require("mongoose");
const connection =
	"mongodb+srv://dnd-admin:<F2Beqo0v1nPutfDZ>@sg-app.aoxdi.mongodb.net/<dndshop>?retryWrites=true&w=majority";
mongoose
	.connect(connection, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then(() => console.log("Database Connected Successfully"))
	.catch(err => console.log(err));

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://dnd-admin:<F2Beqo0v1nPutfDZ>@sg-app.aoxdi.mongodb.net/<dndshop>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
