const express = require("express");
const orderController = require("../controllers/orderController")

const router = express.Router();

router.get("/orders", orderController.getAllOrders);

router.post("/treat", orderController.postToTreat);

router.get("/details/:orderName" , orderController.getDetails)

module.exports = router;
