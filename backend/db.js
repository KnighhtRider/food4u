const mongoose = require("mongoose");
const mongoURL = "mongodb+srv://food4u:vivek1234@cluster0.g2agcgn.mongodb.net/food4u?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(mongoURL);
    console.log("Connected Successfully");

    // Fetch data from "food_items" collection
    const fetchedData = await mongoose.connection.db.collection("food_items").find({}).toArray();
    global.food_items = fetchedData;

    // Fetch data from "food_category" collection
    const catData = await mongoose.connection.db.collection("food_category").find({}).toArray();
    global.food_category = catData;
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  } finally {
    // Ensure to close the MongoDB connection when done
    await mongoose.connection.close();
  }
};

module.exports = mongoDB;
