import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UnauthorizedError } from "../errors";
import config from "../config";

export interface CustomRequest extends Request {
  user: {
    id: string;
  };
}

export const isLoggedIn = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
): Promise<void> => { 
  try {
    const token = req.headers.authorization;

    if (!token) {
      throw new UnauthorizedError("Tizimga kiring");
    }

    // Verify the JWT token and extract the payload
    const payload = await jwt.verify(token, config.jwt.secret);
    // req: = {}; // Assuming the payload has a 'user' property

    next();
  } catch (error) {
    next(error);
  }
};
