const jwt = require("jsonwebtoken");
// const verification = async (req, res, next) => {
//   const token = req.cookies.access_token;
//   if (!token) {
//     throw new Error(`Permission Denied! Token not found`);
//   }

//   const isAuth = jwt.verify(token, process.env.JWT_SECRET);
//   if (!isAuth) {
//     throw new Error(`Permission Denied! Invalid Token`);
//   }
//   req.user = { userId: isAuth.userId, name: isAuth.name };
//   console.log(isAuth);
//   next();
// };

const verification = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Error("Authorization failed");
  }
  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    //attach the user to the  routes
    req.user = { userId: payload.userId, name: payload.name };
    next();
  } catch (error) {
    throw new Error("Authorization failed.");
  }
};

module.exports = verification;
