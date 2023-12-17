const { StatusCodes } = require("http-status-codes");

const errorHandler = (err, req, res, next) => {
  const customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || "something went wrong, please try again",
  };

  if (err.name && err.name === "ValidationError") {
    customError.statusCode = 400;
    customError.message = Object.values(err.errors)
      .map((item) => item.message)
      .join(", ");
  }

  if (err.code && err.code === 11000) {
    customError.message = `Duplicate value entered for ${Object.keys(
      err.keyValue
    )} field, please choose another one`;
  }

  if (err.name && err.name === "CastError") {
    customError.statusCode = StatusCodes.NOT_FOUND;
    customError.message = `No product found with id ${err.value}`;
  }

  // return res.status(customError.statusCode).json({ message: err });
  return res.status(400).json({ message: customError.message });
};

module.exports = errorHandler;
