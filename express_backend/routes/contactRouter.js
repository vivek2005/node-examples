const express = require("express");
const rootdir = require("../utils/pathUtils");
const path = require("path");

const contactRouter = express.Router();
const allNames = [];

contactRouter.get("/contact", (req, res, next) => {
  // res.sendFile(path.join(rootdir, "views", "contact-us.html"));
  res.render("contact-us");
});

contactRouter.post("/contact", (req, res, next) => {
  allNames.push(req.body);
  // res.sendFile(path.join(rootdir, "views", "contact-success.html"));
  // console.log(allNames);
  res.render("contact-success");
});

module.exports.contactRouter = contactRouter;
exports.allNames = allNames;
