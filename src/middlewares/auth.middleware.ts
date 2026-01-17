  import { Request, Response, NextFunction } from "express";
  import jwt from "jsonwebtoken";
  import { jwtConfig } from "../config/jwt";
  import { JwtUserPayload } from "../config/jwt";

  export function authenticate(
  req: Request,
  res: Response,
  next: NextFunction
): Response | void {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, jwtConfig.accessTokenSecret) as JwtUserPayload;

    (req as any).user = decoded;
    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
}
