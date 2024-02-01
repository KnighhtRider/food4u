const express = require("express");
const app = express();
const mongodb = require("./db");
const cors = require("cors");
const mongoose = require('mongoose')

const PORT = process.env.PORT || 5000;

mongodb();

app.use(cors({
  origin: [""],
  methods: ["POST", "GET"],
  credentials: true
}))

app.use(express.json());
app.use("/api", require("./Routes/createUser"));
app.use("/api", require("./Routes/OrderData"));



app.get('/api/foodData', async (req, res) => {
  try {
    const db = mongoose.connection.db;
    
    const food_items = await db.collection('food_items').find({}).toArray();
    const food_category = await db.collection('food_category').find({}).toArray();

    const data = {
      food_items: food_items,
      food_category: food_category,
    };
    res.send(data); 
  } catch (err) {
    console.error(err.message);
    res.send('Server Error');
  }
});





app.get("/", (req, res) => {
  res.send("Hello API!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});