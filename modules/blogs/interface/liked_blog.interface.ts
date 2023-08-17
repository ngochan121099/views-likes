import { Schema } from 'mongoose';
import { BlogList } from './blog.interface';
import { UserList } from '../../users/interface/user.interface';

export interface LikedBlog {
  userId: Schema.Types.ObjectId | UserList;
  blogId: Schema.Types.ObjectId | BlogList;
}
