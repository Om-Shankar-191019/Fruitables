const Product = require("../Models/Product");
const { StatusCodes } = require("http-status-codes");

const createProduct = async (req, res) => {
  const { name, price, image, category, subCategory, description } = req.body;

  const product = await Product.create(req.body);
  res.status(StatusCodes.OK).json({ product });
};

const getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.status(StatusCodes.OK).json({ products });
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.status(StatusCodes.OK).json({ product });
};

module.exports = { getAllProducts, createProduct, getProduct };
