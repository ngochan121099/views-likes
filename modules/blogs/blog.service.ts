import mongoose from 'mongoose';
import {
  CONSTANT_RESPONSE,
  LOGICAL_ERRORS,
  PAGINATION,
} from '../core/constants';
import BlogCollection from './blog.collection';
import { BlogId, BlogList } from './blog.interface';
import LikedBlogCollection from './liked_blog.collection';
import { LikedBlog } from './liked_blog.interface';

const createBlog = async (blog: BlogList) => {
  try {
    const newBlog = await BlogCollection.create(blog);
    return newBlog;
  } catch (error) {
    throw error;
  }
};

const getBlogs = async () => {
  try {
    const findBlogs = BlogCollection.aggregate([
      {
        $lookup: {
          from: 'users',
          localField: 'userId',
          foreignField: '_id',
          as: 'author',
        },
      },
      {
        $project: {
          title: 1,
          description: 1,
          views: 1,
          'author.username': 1,
          'author._id': 1,
        },
      },
    ]);

    const pagination = {
      page: PAGINATION.PAGE,
      limit: PAGINATION.LIMIT,
    };

    const blogs = await BlogCollection.aggregatePaginate(findBlogs, pagination);

    return blogs;
  } catch (error) {
    throw error;
  }
};

const getBlog = async ({ id }: BlogId) => {
  try {
    const likesCount = await LikedBlogCollection.countDocuments({ blogId: id });
    const updateCount = await BlogCollection.findByIdAndUpdate(
      { _id: new mongoose.Types.ObjectId(id) },
      { $inc: { views: 1 }, likes: likesCount },
      { new: true }
    );

    const findBlog = BlogCollection.aggregate([
      {
        $match: { _id: new mongoose.Types.ObjectId(id) },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'userId',
          foreignField: '_id',
          as: 'author',
        },
      },
      {
        $set: {
          views: updateCount.views,
          likes: updateCount.likes,
        },
      },
      {
        $project: {
          title: 1,
          description: 1,
          views: 1,
          likes: 1,
          is_deleted: 1,
          'author.username': 1,
          'author._id': 1,
        },
      },
    ]);

    if (!findBlog) {
      return LOGICAL_ERRORS.BLOG_NOT_FOUND;
    }

    return findBlog;
  } catch (error) {
    throw error;
  }
};

const deleteBlog = async ({ id }: BlogId) => {
  try {
    const blog = await BlogCollection.findById(id);
    if (!blog) {
      return LOGICAL_ERRORS.BLOG_NOT_FOUND;
    }

    if (blog.is_deleted) {
      return LOGICAL_ERRORS.IS_DELETED;
    }

    blog.is_deleted = true;
    await blog.save();

    return CONSTANT_RESPONSE.SUCCESS;
  } catch (error) {
    throw error;
  }
};

const likeBlog = async (id: LikedBlog) => {
  try {
    const likedBlog = await LikedBlogCollection.create({
      userId: id.userId,
      blogId: id.blogId,
    });

    return likedBlog;
  } catch (error) {
    throw error;
  }
};

export { createBlog, getBlog, getBlogs, likeBlog, deleteBlog };
