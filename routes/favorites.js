const router = require("express").Router();
const Favorite = require("../models/Favorite");

//add a favorite
router.post("/", async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  const newFavorite = new Favorite(req.body);
  try {
    const savedFavorite = await newFavorite.save();
    res.status(200).json(savedFavorite);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all favorites

router.get("/", async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  try {
    const favorites = await Favorite.find();
    res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
