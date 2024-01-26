const express = require("express");
const app = express();
const port = 5000;
const mongodb = require("./db");
const cors = require("cors");

mongodb();

app.use(cors({
  origin: ["https://food4u-z.vercel.app"],
  methods: ["POST", "GET"],
  credentials: true
}))


app.use(express.json())
app.use('/api', require('./Routes/createUser')) 
app.use('/api', require('./Routes/DisplayData')) 
app.use('/api', require('./Routes/OrderData'))

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});