const express = require("express");
const ProductController = require("../controllers/ProductController")

const router = express.Router();

router.get("/orders", ProductController.getProducts);

module.exports = router;
