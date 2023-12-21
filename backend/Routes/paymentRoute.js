const express = require("express");
const handlePayment = require("../controllers/paymentController");
const router = express.Router();

router.route("/handlePayment").post(handlePayment);

module.exports = router;
