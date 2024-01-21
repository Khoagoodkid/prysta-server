require("dotenv").config();
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

const PORT = process.env.PORT || 3000

const mongoose = require("mongoose");
const route = require("./routes");
route(app)
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "prysta",
    });
    console.log(conn.connection.host);
  } catch (err) {
    console.log(err);
  }
};

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server is running on port " + PORT)
    })
})

