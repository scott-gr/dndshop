import express from 'express';
import Item from "../../models/itemSchema.js";
const itemsRouter = express();

itemsRouter.get('/items', async (req, res) =>{
  const itemsRouter = await Item.find({});

  try {
    res.send(itemsRouter);
  }catch(err){
    res.status(500).send(err);
  }
});

export default itemsRouter