import jwt from "jsonwebtoken";
import { jwtConfig, JwtUserPayload } from "../../config/jwt";

export function generateAccessToken(payload: JwtUserPayload): string {
  return jwt.sign(payload, jwtConfig.accessTokenSecret, {
    expiresIn: jwtConfig.accessTokenExpiry,
  });
}

export function generateRefreshToken(payload: JwtUserPayload): string {
  return jwt.sign(payload, jwtConfig.refreshTokenSecret, {
    expiresIn: jwtConfig.refreshTokenExpiry,
  });
}
