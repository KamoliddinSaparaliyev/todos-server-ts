import { NotFoundError } from "../../shared/errors";
import { List, ListAttributes } from "./List";

export const addList = async (data: ListAttributes) => {
  const existing: ListAttributes | null = await List.findOne();

  if (!existing) throw new NotFoundError("List not found");
  const created: ListAttributes = await List.create({
    ...data,
  });
  return created;
};
