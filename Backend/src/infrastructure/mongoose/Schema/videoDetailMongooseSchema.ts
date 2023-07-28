import mongoose, { Schema } from 'mongoose';
import { VideoDetailModel } from '../../../domain/models/VideoDetail.model';
import { v4 as uuidv4 } from 'uuid';
const videoDetailSchema = new Schema<VideoDetailModel>({
  videoId: { type: String, required: true, unique: true, default: uuidv4 },
  title: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: true, default: Date.now },
});

export const VideoDetail = mongoose.model('videoDetail', videoDetailSchema);
