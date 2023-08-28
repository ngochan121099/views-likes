import express from 'express';
import authRoutes from './modules/users/user.index';
import blogRoutes from './modules/blogs/blog.index';

export default (app: express.Application): void => {
  authRoutes(app);
  blogRoutes(app);
};
