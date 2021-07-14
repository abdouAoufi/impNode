const express = require("express");
const orderController = require("../controllers/orderController")

const router = express.Router();

router.get("/orders", orderController.getAllOrders);

router.get("/details/:orderName" , orderController.getDetails)

router.post("/treat", orderController.postToTreat);

router.post("/add-product", orderController.addOrder);

router.get("/treat-list" , orderController.getTreatList)
module.exports = router;
