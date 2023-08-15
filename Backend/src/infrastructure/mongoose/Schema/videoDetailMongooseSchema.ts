import mongoose, { Document, Schema } from 'mongoose';
import { VideoDetailModel } from '../../../domain/models/VideoDetail.model';
const videoDetailSchema = new Schema<VideoDetailModel & Document>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    linkVideo: { type: String, required: true },
  }
);

export const VideoDetail = mongoose.model('videoDetail', videoDetailSchema);
