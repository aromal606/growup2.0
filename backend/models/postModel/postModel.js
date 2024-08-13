import mongoose, { Schema } from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userid: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    description: {
      type: String,
    },
    image: {
      type: string,
    },
    likes: [
      {
        type: string,
      },
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "comments",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const posts = mongoose.model("posts" , postSchema)
export default posts