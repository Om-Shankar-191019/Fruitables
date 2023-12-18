const jwt = require("jsonwebtoken");
const verification = async (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    throw new Error(`Permission Denied! Token not found`);
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId, username: payload.username };
    next();
  } catch (error) {
    throw new Error("Authorization failed.");
  }
};

// const verification = async (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     throw new Error("Authorization failed");
//   }
//   const token = authHeader.split(" ")[1];
//   try {
//     const payload = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = { userId: payload.userId, name: payload.name };
//     next();
//   } catch (error) {
//     throw new Error("Authorization failed.");
//   }
// };

module.exports = verification;
