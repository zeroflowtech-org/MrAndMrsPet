import { User } from "../users/user.model";
import { comparePassword } from "../../utils/password.util";
import { generateAccessToken, generateRefreshToken } from "./token.service";

export class AuthService {
  static async login(email: string, password: string) {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error("Invalid credentials");

    const valid = await comparePassword(password, user.passwordHash);
    if (!valid) throw new Error("Invalid credentials");

    const payload = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    return {
      accessToken: generateAccessToken(payload),
      refreshToken: generateRefreshToken(payload),
      user,
    };
  }
}
