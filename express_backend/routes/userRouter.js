const express = require("express");
const rootdir = require("../utils/pathUtils");
const path = require("path");
const { allNames } = require("./contactRouter");

const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  // res.sendFile(path.join(rootdir, "views", "home.ejs"));
  // console.log(allNames);
  res.render("home", { allNames });
});

module.exports = userRouter;
