import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const checkAuth = (req, res, next) => {
  let token;
  if (req.cookies.access_token) {
    token = req.cookies.access_token;
  } else {
    token = req.headers["access_token"];
    token = token.replace(/"/g, "");
  }

  if (!token) {
    return next(createError({ status: 401, message: "Unauthorized" }));
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return next(createError({ status: 401, message: "Invalid token" }));
    } else {
      req.user = decoded;
      return next();
    }
  });
};
