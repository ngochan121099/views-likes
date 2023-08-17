import LikedBlogCollection from '../collection/liked_blog';
import { LOGICAL_ERRORS } from '../../utils/constants';
import BlogCollection from '../collection/blog.collection';
import { BlogId, BlogList } from '../interface/blog.interface';
import { UserId } from '../../users/interface/user.interface';

export const createBlog = async (blog: BlogList) => {
  try {
    const newBlog = await BlogCollection.create(blog);
    return newBlog;
  } catch (error) {
    throw error;
  }
};

export const getBlog = async ({ id }: BlogId) => {
  try {
    const findBlog = await BlogCollection.findById(id).populate('userId');
    console.log(11111, findBlog);

    if (!findBlog) {
      return LOGICAL_ERRORS.BLOG_NOT_FOUND;
    }

    findBlog.views++;
    await findBlog.save();

    // update and show likes in a blog
    const likesCount = await LikedBlogCollection.countDocuments({ blogId: id });
    console.log(222, likesCount);

    const showLikes = await BlogCollection.findOneAndUpdate(
      { _id: id },
      { likes: likesCount },
      { new: true }
    );
    console.log(333, showLikes);

    return showLikes;
  } catch (error) {
    throw error;
  }
};

export const deleteBlog = async ({ id }: BlogId) => {
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

    return { msg: 'Deleted successfully!' };
  } catch (error) {
    throw error;
  }
};

export const likeBlog = async (user_id: UserId, blog_id : BlogId) => {
  try {
    const findBlog = await BlogCollection.findById({ blog_id });
    if (!findBlog) {
      return LOGICAL_ERRORS.BLOG_NOT_FOUND;
    }

    const likedBlog = await LikedBlogCollection.create({
      userId: user_id,
      blogId: blog_id,
    });

    return likedBlog;
  } catch (error) {
    throw error;
  }
};
