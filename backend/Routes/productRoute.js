const express = require("express");
const {
  getAllProducts,
  createProduct,
  getProduct,
} = require("../controllers/productController");
const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/product/:id").get(getProduct);
router.route("/createProduct").post(createProduct);

module.exports = router;
