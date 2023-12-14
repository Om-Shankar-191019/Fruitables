const { StatusCodes } = require("http-status-codes");

const errorHandler = (err, req, res, next) => {
  const customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || "something went wrong, please try again",
  };

  if (err.name && err.name === "ValidationError") {
    customError.statusCode = 400;
    customError.message = err.errors.name.message;
  }

  return res.status(customError.statusCode).json({ message: err });
};

module.exports = errorHandler;
