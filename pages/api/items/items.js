// sample data to test connection


import { connectToDatabase } from "../../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const items = await db
    .collection("items")
    .find({})
    .limit(20)
    .toArray();

  res.json(items);
};