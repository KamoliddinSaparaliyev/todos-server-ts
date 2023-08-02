import { NotFoundError } from "../../shared/errors";
import { List, ListAttributes } from "./List";

interface showListId {
  id: string;
}

export const showList = async ({ id }: showListId) => {
  const list: ListAttributes | null = await List.findById(id);

  if (!list) throw new NotFoundError("List not found");
  return list;
};
