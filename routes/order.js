const express = require("express");
const homeAdmin = require("./home");

const router = express.Router();

router.get("/orders", (req, res, next) => {
  console.log(homeAdmin.products);
  res.render("order", { pageTitle: "My orders", productList: homeAdmin.products });
});

module.exports = router;
