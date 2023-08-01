import { User, UserDocument } from "./User";

export const listUsers = async (filter = {}) => {
  const users: UserDocument[] = await User.find(filter).select([
    "name",
    "username",
  ]);
  return users;
};
