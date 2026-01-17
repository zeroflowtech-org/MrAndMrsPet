import { SignOptions } from "jsonwebtoken";

export interface JwtUserPayload {
  id: number;
  email: string;
  role: "CUSTOMER" | "VENDOR" | "ADMIN";
}

// Strongly typed secrets and expiry
export const jwtConfig: {
  accessTokenSecret: string;
  refreshTokenSecret: string;
  accessTokenExpiry: SignOptions["expiresIn"];
  refreshTokenExpiry: SignOptions["expiresIn"];
} = {
  accessTokenSecret: process.env.JWT_ACCESS_SECRET || (() => { throw new Error("Missing JWT_ACCESS_SECRET"); })(),
  refreshTokenSecret: process.env.JWT_REFRESH_SECRET || (() => { throw new Error("Missing JWT_REFRESH_SECRET"); })(),
  accessTokenExpiry: "15m",
  refreshTokenExpiry: "7d",
};
