require("dotenv").config();
require("express-async-errors");
const express = require("express");
const connect = require("./config/db");
const notFound = require("./middlewares/not-found");
const productRouter = require("./Routes/productRoute");
const errorHandler = require("./middlewares/error-handler");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/products", (req, res) => {
  res.json({ message: "working" });
});

//routes
app.use("/api/v1", productRouter);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 8000;

const start = async () => {
  try {
    await connect(process.env.MONGO_URI);
    app.listen(port, () => console.log(`server is running at port ${port}...`));
    console.log("db connected successfully");
  } catch (error) {
    console.log(error.message);
  }
};

start();
