import { Schema } from 'mongoose';

export interface BlogList {
  title?: string;
  description?: string;
  userId: Schema.Types.ObjectId;
}

export interface BlogId {
  id: Schema.Types.ObjectId | string;
}
