import { NextFunction, Request, Response } from "express";
import { addList } from "./add-list";
import genValidator from "../../shared/validator";
import { patchListSchema, postListSchema } from "./_schemas";
import { listLists } from "./list-lists";
import { ListAttributes } from "./List";
import { showList } from "./show-list";
import { editList } from "./edit-list";
import { removeList } from "./remove-list";

export const postList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    genValidator(postListSchema);
    const result: ListAttributes = await addList(req.body);

    res.status(201).json({ data: result });
  } catch (error) {
    next(error);
  }
};

export const getLists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result: ListAttributes[] = await listLists();

    res.status(201).json({ data: result });
  } catch (error) {
    next(error);
  }
};

export const getList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result: ListAttributes = await showList({ id: req.params.id });

    res.status(201).json({ data: result });
  } catch (error) {
    next(error);
  }
};

export const patchList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    genValidator(patchListSchema);
    const result: ListAttributes | null = await editList({
      id: req.params.id,
      data: req.body,
    });

    res.status(201).json({ data: result });
  } catch (error) {
    next(error);
  }
};

export const deleteList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    genValidator(patchListSchema);
    const result: ListAttributes | null = await removeList({
      id: req.params.id,
    });

    res.status(201).json({ data: result });
  } catch (error) {
    next(error);
  }
};
