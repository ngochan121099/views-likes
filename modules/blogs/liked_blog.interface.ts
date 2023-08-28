import { Schema } from 'mongoose';
import { BlogId } from './blog.interface';
import { UserId } from '../users/user.interface';

export interface LikedBlog {
  userId: Schema.Types.ObjectId | UserId;
  blogId: Schema.Types.ObjectId | BlogId;
}
