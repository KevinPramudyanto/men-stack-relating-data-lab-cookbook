const jwt = require("jsonwebtoken");

const isSignedIn = (req, res, next) => {
  if (!("authorization" in req.headers)) {
    return res.status(401).json({ status: "error", msg: "no token found" });
  }

  const token = req.headers["authorization"].replace("Bearer ", "");
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.ACCESS_SECRET);
      req.decoded = decoded;
      next();
    } catch (error) {
      console.error(error.message);
      return res.status(401).json({ status: "error", msg: "not authorized" });
    }
  } else {
    return res.status(401).json({ status: "error", msg: "no token found" });
  }
};

module.exports = isSignedIn;
