const express = require("express");
const router = express.Router();
const controller = require("../controllers/auth-controllers.js"); 

router.route("/").get(controller.home);

router.route("/register").post(controller.register);

module.exports = router;
