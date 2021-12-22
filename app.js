const express = require("express");
const cors = require("cors");
const { Octokit } = require("@octokit/core");
const mongoose = require("mongoose");
const app = express();
const favoriteRoute = require("./routes/favorites");
var timeout = require("connect-timeout");

require("dotenv").config();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => console.log(err));

//middlewares
app.use(cors());

app.use(express.json()); //req.body

const octokit = new Octokit({
  auth: process.env.OKTOKIT_CODE,
});

//ROUTES//
//Search Github Organization Accounts for their Repos

app.post("/get_orgs", async (req, res) => {
  try {
    const { search } = req.body;
    const getSearch = await octokit.request("GET /organizations");
    res.json(getSearch);
  } catch (err) {
    console.log("sql error: " + err.message);
  }
});

app.post("/search_org", async (req, res) => {
  try {
    const { search } = req.body;

    const getSearch = await octokit.request("GET /orgs/{org}/repos", {
      org: search,
    });
    res.json(getSearch);
  } catch (err) {
    res.json(err.message);
    console.log("sql error: " + err.message);
  }
});

app.use("/favorites", favoriteRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("server has started on port 5000");
});

module.exports = app;

// app.listen(5000, () => {
//   console.log("server has started on port 5000");
// });
