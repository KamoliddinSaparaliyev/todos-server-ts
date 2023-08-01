import { NotFoundError } from "../../shared/errors";
import { User, UserDocument } from "./User";

interface showUserId {
  id: string;
}

export const showUser = async ({ id }: showUserId) => {
  const user: UserDocument = await User.findById(id).select([
    "name",
    "username",
  ]);

  if (!user) throw new NotFoundError("User not found");
  return user;
};
