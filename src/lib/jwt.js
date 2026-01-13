import jwt from "jsonwebtoken";

export function generateDownloadToken(productId, index) {
  return jwt.sign({ productId, index }, process.env.JWT_SECRET, {
    expiresIn: "15min",
  });
}

export function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}
