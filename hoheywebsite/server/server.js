const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const FilmModel = require("./models/Video");
require("dotenv/config");

app.use(cors());
app.use(express.json());

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log("connected");
  }
);

app.post("/insert", async (req, res) => {
  const filmName = req.body.filmName;
  const creator = req.body.creator;
  const description = req.body.description;
  const film = new FilmModel({ filmName, creator, description });
  try {
    await film.save();
  } catch (err) {
    console.log(err);
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
