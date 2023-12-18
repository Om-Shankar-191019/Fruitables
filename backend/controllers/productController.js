const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const Product = require("../Models/Product");
const { StatusCodes } = require("http-status-codes");

const createProduct = async (req, res) => {
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

const uploadImage = async (req, res) => {
  console.log(req.files.image);

  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: "fruitable",
    }
  );
  fs.unlinkSync(req.files.image.tempFilePath);

  res.send({ image: { src: result.secure_url } });
};
const updateProduct = async (req, res) => {};
const deleteProduct = async (req, res) => {};

module.exports = {
  getAllProducts,
  createProduct,
  getProduct,
  uploadImage,
  updateProduct,
  deleteProduct,
};
