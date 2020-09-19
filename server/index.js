const mongoose = require('mongoose');
const express = require("express");
const path = require("path");
const gatsby = require("gatsby-plugin-nodejs");
const port = process.env.PORT || 1337;
const app = express();

gatsby.prepare({ app }, () => {
  // Here you can define your routes
});



app.listen(port, () => console.log(`listening on port ${port}`));