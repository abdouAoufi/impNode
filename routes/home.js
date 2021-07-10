const express = require("express");
const path = require("path");
const root = require("../helper/path");
const ProductController = require("../controllers/ProductController");

const router = express.Router();
const products = [];

router.get("/", ProductController.getHome);

router.post("/add-product", ProductController.addProducts);

exports.router = router;
exports.products = products;
