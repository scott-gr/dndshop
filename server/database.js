const MongoClient = require("mongodb").MongoClient;
const uri =
	"mongodb+srv://dnd-admin:<F2Beqo0v1nPutfDZ>@sg-app.aoxdi.mongodb.net/<dndshop>?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
});
client.connect(err => {
	const collection = client.db("test").collection("devices");
	// perform actions on the collection object
	client.close();
})
.then(() => console.log("Database Connected Successfully"))
.catch(err => console.log(err));