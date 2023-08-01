import { NotFoundError } from "../../shared/errors";
import { User, UserDocument } from "./User";

interface UserUpdateAttributes {
  id: string;
  data: {
    name?: string;
    username?: string;
    password?: string;
  };
}

export const editUser = async ({ id, data }: UserUpdateAttributes) => {
  const existing: UserDocument | null = await User.findById(id);

  if (!existing) throw new NotFoundError("User not found");

  const updated: UserDocument | null = await User.findByIdAndUpdate(id, data, {
    new: true,
  });
  return updated;
};
