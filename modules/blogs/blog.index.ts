import express from 'express';
import {
  createBlogHandler,
  deleteBlogHandler,
  getBlogHandler,
  getBlogsHandler,
  likeBlogHandler,
} from './blog.controller';

const blogRoutes = (app: express.Application): void => {
  app.get('/blog/:id', getBlogHandler);
  app.get('/blog', getBlogsHandler);
  app.post('/blog/create', createBlogHandler);
  app.delete('/blog/:id', deleteBlogHandler);
  app.post('/blog/like', likeBlogHandler);
};

export default blogRoutes;
