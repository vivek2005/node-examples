const path = require("path");
// External module
const express = require("express");
// local module
const rootdir = require("./utils/pathUtils");

const userRouter = require("./routes/userRouter");
const { contactRouter, allNames } = require("./routes/contactRouter");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(rootdir, "public")));

app.use(express.urlencoded());
app.use(userRouter);
app.use(contactRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootdir, "views", "404.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server has been started");
});
