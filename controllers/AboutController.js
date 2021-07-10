const path = require("path");
const root = require("../helper/path");

exports.getAbout = (req, res, next) => {
  res.sendFile(path.join(root, "views", "about.html"));
};
