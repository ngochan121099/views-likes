import { Schema } from 'mongoose';

export interface BlogList {
  title?: string;
  description?: string;
  userId: Schema.Types.ObjectId;
  views: number;
  is_deleted: boolean;
}

export interface BlogId {
  id: string;
}
