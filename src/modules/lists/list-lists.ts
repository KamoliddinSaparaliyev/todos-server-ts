import { List, ListAttributes } from "./List";

export const listLists = async (filter = {}) => {
  const lists: ListAttributes[] = await List.find(filter);
  return lists;
};
