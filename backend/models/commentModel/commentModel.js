import mongoose, { Schema } from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    postId: {
      type: Schema.Types.ObjectId,
      ref: "posts",
    },
    comment: {
      type: String,
      required: true,
    },
    from: {
      type: String,
      required: true,
    },
    replies: [
      {
        rId: {
          type: mongoose.Schema.Types.ObjectId,
        },
        userId: {
          type: Schema.Types.ObjectId,
          ref: "user",
        },
        from: {
          type: String,
        },
        replyAt: {
          type: string,
        },
        comment: {
          type: string,
        },
        created_At: {
          type: Date,
          default: Date.now(),
        },
        updated_At: {
          type: Date,
          default: Date.now(),
        },
        likes: [
          {
            userId: {
              type: Schema.Types.ObjectId,
              ref: "user",
            },
          },
          {
            type: string,
          },
        ],
      },
    ],
    likes: [
      {
        userId: {
          type: Schema.Types.ObjectId,
          ref: "user",
        },
      },
      {
        type: string,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const comments = mongoose.model("comments", commentSchema)
export default comments