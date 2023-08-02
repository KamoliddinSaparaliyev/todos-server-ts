import { hash } from "bcryptjs";
import { NotFoundError } from "../../shared/errors";
import { User, UserDocument } from "./User";

export const addUser = async (data: UserDocument) => {
  const existing: UserDocument | null = await User.findOne({
    username: data.username,
  });
  const hashPassword = await hash(data.password, 10);

  if (existing) throw new NotFoundError("User already exist");

  const created: UserDocument = await User.create({
    ...data,
    password: hashPassword,
  });
  return created;
};
