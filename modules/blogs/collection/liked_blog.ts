import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const likedBlogSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "users",
  },
  blogId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "blogs",
  },
});

const LikedBlogCollection = mongoose.model('liked_blogs', likedBlogSchema);

export default LikedBlogCollection;
