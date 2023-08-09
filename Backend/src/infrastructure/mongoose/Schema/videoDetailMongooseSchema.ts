import mongoose, { Document, Schema } from 'mongoose';
import { VideoDetailModel } from '../../../domain/models/VideoDetail.model';
const videoDetailSchema = new Schema<VideoDetailModel & Document>({
  videoId: { type: String, unique: true },
  title: { type: String, required: true },
});

export const VideoDetail = mongoose.model('videoDetail', videoDetailSchema);
