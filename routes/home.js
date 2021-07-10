const express = require("express");
const path = require("path");
const root = require("../helper/path");

const router = express.Router();
const products = [];

router.get("/", (req, res, next) => {
  res.render("index");
});

router.post("/add-product", (req, res, next) => {
  products.push(req.body);
  res.redirect("/");
});

exports.router = router;
exports.products = products;
