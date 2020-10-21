const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const dotenv = require("dotenv");
dotenv.config();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(process.env.REACT_APP_MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err) => {
  if (err) { console.log(err);
  }else {
    console.log ("Connected to database");
  }
})


app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
