const express = require("express");
const OrderController = require("../controllers/orderController");

const router = express.Router();

router.get("/", OrderController.getHome);

exports.router = router;
