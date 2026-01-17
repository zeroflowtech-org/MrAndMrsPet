import bcrypt from "bcrypt";

const SALT_ROUNDS = 12;

/**
 * Hash plain-text password
 */
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS);
}

/**
 * Compare plain-text password with stored hash
 */
export async function comparePassword(
  password: string,
  passwordHash: string
): Promise<boolean> {
  return bcrypt.compare(password, passwordHash);
}
