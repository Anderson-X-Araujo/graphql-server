const jwt = require("jsonwebtoken");
const APP_SECRET =
  "5eaad49897b8142604106f2229efe0b72c0ec6fdf22022fd89c618f5fcf213273d2610be0745bf4b1955a810eabc7ee0c9c24fdcf5958299643b60401a834e1725bd76cfea05ea1242b85ef61e99a13c5bfda87dbb7dc853fdd5696464313860bdd78155a73d82345c00b94e93bf91501a94e40cca969fffa77f7c65c585c2ea";

function getTokenPayload(token) {
  return jwt.verify(token, APP_SECRET);
}

function getUserId(req, authToken) {
  if (req) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.replace("Bearer ", "");

      if (!token) {
        throw new Error("No token found");
      }

      const { userId } = getTokenPayload(token);

      return userId;
    }
  } else if (authToken) {
    const { userId } = getTokenPayload(authToken);

    return userId;
  }

  throw new Error("Not authenticated");
}

module.exports = {
  APP_SECRET,
  getUserId,
};
