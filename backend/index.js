const express = require("express");
const app = express();
const mongodb = require("./db");

const PORT = process.env.PORT || 5000;

mongodb();

app.use(express.json());
app.use("/api", require("./Routes/createUser"));
app.use("/api", require("./Routes/DisplayData"));
app.use("/api", require("./Routes/OrderData"));

app.get("/", (req, res) => {
  res.send("Hello API!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});