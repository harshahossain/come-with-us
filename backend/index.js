const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser"); //needed for form posting
const router = require("./routes/router");
const mongoose = require("mongoose");
require("dotenv/config"); //gotta say config like that cause npm dotenv docs

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use("/", router);

const dbOption = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(Process.env.DB_URI, dbOption)
  .then(() => {
    console.log("Database Connected!");
  })
  .catch((err) => console.log(err));
// const port = 4000;
const port = Process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
