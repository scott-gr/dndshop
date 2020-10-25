const express = require('express');
import itemSchema from "../../models/itemSchema";
const app = express();

app.get('/items', async (req, res) =>{
  const items = await itemSchema.find({});

  try {
    res.send(items);
  }catch(err){
    res.status(500).send(err);
  }
});

module.exports = router