import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UnauthorizedError } from "../errors";
import config from "../config";

interface UserPayload {
  user: {
    id: string;
  };
}

export const isLoggedIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization;
    if (!token) throw new UnauthorizedError("Tizimga kiring");
    const payload = (await jwt.verify(token, config.jwt.secret)) as UserPayload;
    console.log(payload);
    req.user = payload.user;
    next();
  } catch (error) {
    next(error);
  }
};
