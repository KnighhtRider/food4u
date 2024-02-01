const mongoose = require("mongoose");

const mongoURL =
  "mongodb+srv://food4u:vivek1234@cluster0.g2agcgn.mongodb.net/food4u?retryWrites=true&w=majority";

const mongoDB = async () => {
  
  const mongoURL =
    "mongodb+srv://food4u:vivek1234@cluster0.g2agcgn.mongodb.net/food4u?retryWrites=true&w=majority";

  mongoose
    .connect(mongoURL)
    .then(() => {
      console.log("DB Connetion Successfull");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = mongoDB;
