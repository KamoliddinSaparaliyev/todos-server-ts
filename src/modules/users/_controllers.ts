import { NextFunction, Request, Response } from "express";
import { addUser } from "./register-user";
import genValidator from "../../shared/validator";
import { patchUserSchema, postUserSchema } from "./_schemas";
import { listUsers } from "./list-users";
import { UserDocument } from "./User";
import { showUser } from "./show-user";
import { editUser } from "./edit-user";
import { removeUser } from "./remove-user";
import { login } from "./login-user";

export const postUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    genValidator(postUserSchema);
    const result: UserDocument = await addUser(req.body);

    res.status(201).json({ data: result });
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result: UserDocument[] = await listUsers();

    res.status(201).json({ data: result });
  } catch (error) {
    next(error);
  }
};

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result: UserDocument = await showUser({ id: req.params.id });

    res.status(201).json({ data: result });
  } catch (error) {
    next(error);
  }
};

export const patchUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    genValidator(patchUserSchema);
    const result: UserDocument | null = await editUser({
      id: req.params.id,
      data: req.body,
    });

    res.status(201).json({ data: result });
  } catch (error) {
    next(error);
  }
};

interface UserLogin {
  token: string;
}
export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    genValidator(patchUserSchema);
    const result: UserLogin = await login(req.body);

    res.status(201).json({ data: result });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    genValidator(patchUserSchema);
    const result: UserDocument | null = await removeUser({ id: req.params.id });

    res.status(201).json({ data: result });
  } catch (error) {
    next(error);
  }
};
