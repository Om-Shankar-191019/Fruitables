require("dotenv").config();
require("express-async-errors");
const express = require("express");
const connect = require("./config/db");
const notFound = require("./middlewares/not-found");
const productRouter = require("./Routes/productRoute");
const userRouter = require("./Routes/userRoute");
const errorHandler = require("./middlewares/error-handler");
const cloudinary = require("cloudinary").v2;
const fileUpload = require("express-fileupload");

const cors = require("cors");
const app = express();
app.use(express.json({ limit: "10mb" }));
app.use(cors());
app.use(fileUpload({ useTempFiles: true }));
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

app.get("/products", (req, res) => {
  res.json({ message: "working" });
});

//routes
app.use("/api/v1", productRouter);
app.use("/api/v1", userRouter);

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
