import express from 'express';
import authRoutes from './modules/users/index/user.index';
import blogRoutes from './modules/blogs/index/blog.index';

export default (app: express.Application): void => {
  authRoutes(app);
  blogRoutes(app);
};
