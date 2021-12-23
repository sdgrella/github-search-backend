const router = require("express").Router();
const Favorite = require("../models/Favorite");

//add a favorite
app.post("/", async (req, res) => {
  const newFavorite = new Favorite(req.body);
  try {
    const savedFavorite = await newFavorite.save();
    res.status(200).json(savedFavorite);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all favorites

app.get("/", async (req, res) => {
  try {
    const favorites = await Favorite.find();
    res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
