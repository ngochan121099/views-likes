import { NextFunction, Request, Response } from 'express';
import { signUp } from '../services/auth.service';

export const signUpHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await signUp({
      username: req.body.username,
      password: req.body.password,
    });

    return res.status(201).json(result);
  } catch (error) {
    throw error;
  }
};