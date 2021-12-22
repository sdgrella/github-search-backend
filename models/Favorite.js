const mongoose = require("mongoose");

const FavoriteSchema = new mongoose.Schema({
  name: {
    type: String,
    min: 0,
    max: 100
  },
  id: { type: Number},
  login: { type: String, min: 0, max: 100},
  watchers: { type: Number},
  avatar: { type: String, min: 0, max: 100},
  language: { type: String, min: 0, max: 100},
  url: { type: String, min: 0, max: 100},
  date: { type: String, min: 0, max: 100},
  license: { type: String, min: 0, max: 100},
  comment: { type: String, min: 0, max: 100},
  
},
{timestamps: true}
);


module.exports = mongoose.model("Favorite", FavoriteSchema)