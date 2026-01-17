import { Request, Response } from "express";
import { AuthService } from "./auth.service";

export class AuthController {
  static async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const { accessToken, refreshToken, user } =
      await AuthService.login(email, password);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });

    res.json({
      accessToken,
      user: { id: user.id, email: user.email, role: user.role },
    });
  }
}
