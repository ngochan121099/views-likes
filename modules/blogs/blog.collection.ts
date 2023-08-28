import mongoose from 'mongoose';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'users',
  },
  views: {
    type: Number,
    default: 0,
  },
  is_deleted: {
    type: Boolean,
    default: false,
  },
  likes: {
    type: Number,
    default: 0,
  },
});

blogSchema.plugin(mongooseAggregatePaginate);
const BlogCollection = mongoose.model('blogs', blogSchema);

export default BlogCollection;
