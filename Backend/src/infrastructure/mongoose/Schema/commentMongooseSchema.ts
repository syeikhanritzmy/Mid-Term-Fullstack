import mongoose, { Document, Schema } from 'mongoose';
import { Comment } from '../../../domain/models/Comment.model';

const commentSchema = new Schema<Comment>({
  videoId: { type: String, required: true },
  username: { type: String, required: true },
  comment: { type: String, required: true },
  timestamp: { type: Date, required: true, default: Date.now },
});

export const CommentModel = mongoose.model<Comment & Document>(
  'Comment',
  commentSchema
);
