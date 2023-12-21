const express = require("express");
const {
  getAllProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
} = require("../controllers/productController");
const verification = require("../middlewares/authorization");
const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/product/:id").get(getProduct);
router.route("/createProduct").post(createProduct);
router.route("/uploadImage").post(uploadImage);
router.route("/updateProduct").post(updateProduct);
router.route("/deleteProduct").post(deleteProduct);

module.exports = router;
