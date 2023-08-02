import { NotFoundError } from "../../shared/errors";
import { List, ListAttributes } from "./List";

interface ListRemoveAttributes {
  id: string;
}

export const removeList = async ({ id }: ListRemoveAttributes) => {
  const existing: ListAttributes | null = await List.findById(id);

  if (!existing) throw new NotFoundError("List not found");

  const deleted: ListAttributes | null = await List.findByIdAndRemove(id);
  return deleted;
};
