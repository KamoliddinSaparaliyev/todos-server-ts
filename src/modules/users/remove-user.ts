import { NotFoundError } from "../../shared/errors";
import { User, UserDocument } from "./User";

interface UserRemoveAttributes {
  id: string;
}

export const removeUser = async ({ id }: UserRemoveAttributes) => {
  const existing: UserDocument | null = await User.findById(id);

  if (!existing) throw new NotFoundError("User not found");

  const deleted: UserDocument | null = await User.findByIdAndRemove(id);
  return deleted;
};
