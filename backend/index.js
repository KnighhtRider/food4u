const express = require("express");
const app = express();
const port = 5000;
const mongodb = require("./db");
const cors = require("cors");

mongodb();

app.use(cors())

app.use(cors()); // Use this after the variable declaration
app.use(express.json());
app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));
app.use("/api", require("./Routes/OrderData"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});