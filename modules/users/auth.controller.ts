import { NextFunction, Request, Response } from 'express';
import { signUp } from './auth.service';

export const signUpHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await signUp({
      ...req.body
    });

    return res.status(201).json(result);
  } catch (error) {
    throw error;
  }
};