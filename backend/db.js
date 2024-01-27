const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://food4u:vivek1234@cluster0.g2agcgn.mongodb.net/food4u?retryWrites=true&w=majority";

const mongodb = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("connected");
    const fetched_data = await mongoose.connection.db.collection("food_items");
    fetched_data.find({}).toArray(async (err, data) => {
      const foodCategory = await mongoose.connection.db.collection("food_category");
      foodCategory.find({}).toArray(async function(err, catData){
          if (err) {
              console.log(err)
          }
          else {
              global.food_items = data;
              global.foodCategory = catData;
          };
      })
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = mongodb;