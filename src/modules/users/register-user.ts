import { NotFoundError } from "../../shared/errors";
import { User, UserDocument } from "./User";

export const addUser = async (data: UserDocument) => {
  const existing: UserDocument | null = await User.findOne({
    username: data.username,
  });

  if (existing) throw new NotFoundError("User already exist");

  const created: UserDocument = await User.create(data);
  return created;
};
