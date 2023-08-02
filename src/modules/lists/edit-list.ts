import { NotFoundError } from "../../shared/errors";
import { List, ListAttributes } from "./List";

interface ListUpdateAttributes {
  id: string;
  data: {
    name?: string;
  };
}

export const editList = async ({ id, data }: ListUpdateAttributes) => {
  const existing: ListAttributes | null = await List.findById(id);

  if (!existing) throw new NotFoundError("List not found");

  const updated: ListAttributes | null = await List.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
    }
  );
  return updated;
};
