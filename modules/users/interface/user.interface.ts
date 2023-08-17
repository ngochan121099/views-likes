import { Schema } from 'mongoose';

export interface UserList {
  username?: string;
  password: string;
}

export interface UserId {
  id: Schema.Types.ObjectId | string;
}
