import mongoose, { Schema } from 'mongoose';
import { VideoThumbnailModel } from '../../../domain/models/VideoThumbnail.model';

const videoThumbnailSchema = new Schema<VideoThumbnailModel>({
  videoId: { type: String, required: true },
  urlImageThumbnail: { type: String, required: true },
  productLists: [{ type: Schema.Types.ObjectId, ref: 'ProductList' }],
  createdAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: true, default: Date.now },
});

export const VideoThumbnail = mongoose.model(
  'videoThumbnail',
  videoThumbnailSchema
);
