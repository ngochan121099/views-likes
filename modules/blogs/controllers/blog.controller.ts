import { NextFunction, Request, Response } from 'express';
import { createBlog, deleteBlog, getBlog, likeBlog } from '../services/blog.service';

export const createBlogHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await createBlog({
      title: req.body.title,
      description: req.body.description,
      userId: req.body.userId,
    });

    return res.status(200).json({ msg: 'Create blog successfully!' });
  } catch (error) {
    throw error;
  }
};

export const getBlogHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const result = await getBlog({ id });

    return res.status(200).json(result);
  } catch (error) {
    throw error;
  }
};

export const deleteBlogHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const result = await deleteBlog({ id });

    return res.status(200).json(result);
  } catch (error) {
    throw error;
  }
};

export const likeBlogHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { user_id, blog_id } = req.body;
    const result = await likeBlog(user_id, blog_id);

    return res.status(200).json(result);
  } catch (error) {
    throw error;
  }
};
