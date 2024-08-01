import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  datetime: {
    type: Date,
    required: true,
  },
});

export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);
