import express from 'express';
import { signUpHandler } from './auth.controller';

const authRoutes = (app: express.Application): void => {  
  app.post('/auth/createuser', signUpHandler);
};

export default authRoutes;