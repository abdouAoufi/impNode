const express = require("express");
const path = require("path");
const root = require("../helper/path");
const OrderController = require("../controllers/orderController");

const router = express.Router();
const products = [];

router.get("/", OrderController.getHome);

router.post("/add-product", OrderController.addOrder);

exports.router = router;
exports.products = products;
