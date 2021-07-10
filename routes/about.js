const express = require("express");
const path = require("path");
const root = require("../helper/path");

const router = express.Router();

router.get("/about", (req, res, next) => {
  res.sendFile(path.join(root, "views", "about.html"));
});


module.exports = router ;