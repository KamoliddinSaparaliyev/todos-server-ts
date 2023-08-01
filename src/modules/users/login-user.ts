import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";
import { User, UserDocument } from "./User";
import config from "../../shared/config";
import { NotFoundError, UnauthorizedError } from "../../shared/errors";

interface UserLogin {
  username: string;
  password: string;
}
export const login = async ({ password, username }: UserLogin) => {
  const existing: UserDocument | null = await User.findOne({ username });

  if (!existing) throw new NotFoundError("User not found");

  const match = await compare(password, existing.password);

  if (!match) throw new UnauthorizedError("Username or password wrong");

  const payload = { user: { id: existing._id } };
  const secretKey = config.jwt.secret;

  const token: string = jwt.sign(payload, secretKey);
  return { token };
};
