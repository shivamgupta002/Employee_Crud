const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./routes/employee-routes");
const cors = require("cors");

//MiddleWare
app.use(express.json());
app.use(cors());

app.use("/employees", router);

mongoose
  .connect("mongodb://127.0.0.1/CRUD", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DataBase");
  })
  .catch((e) => {
    console.log("Connection Error due to :" + e);
  });
app.listen(5000);
