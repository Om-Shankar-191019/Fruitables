const { StatusCodes } = require("http-status-codes");
const User = require("../Models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { username, email, password, image } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  const userData = { username, email, password: hashPassword, image };
  const user = await User.create(userData);

  const token = jwt.sign(
    { userId: user._id, username },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_LIFETIME }
  );
  res
    .cookie("access_token", token, { httpOnly: true })
    .status(StatusCodes.OK)
    .json({ user: { username: user.username } });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new Error(`All fields are required.`);
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error(`User does not exist.`);
  }
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    throw new Error(`Invalid credentials`);
  }

  const token = jwt.sign(
    { userId: user._id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_LIFETIME }
  );

  res
    .cookie("access_token", token, { httpOnly: true })
    .status(StatusCodes.OK)
    .json({
      user: { username: user.username, email: user.email, image: user.image },
    });
};

module.exports = { register, login };
