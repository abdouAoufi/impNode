const express = require("express");
const AboutController = require("../controllers/AboutController");

const router = express.Router();

router.get("/about", AboutController.getAbout);

module.exports = router;
