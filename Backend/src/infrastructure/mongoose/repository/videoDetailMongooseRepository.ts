import { VideoDetailModel } from '../../../domain/models/VideoDetail.model';
import { VideoDetailRepository } from '../../../domain/repositories/VideoDetailRepository';
import { VideoDetail } from '../Schema/videoDetailMongooseSchema';

export class VideoDetailMongooseRepository implements VideoDetailRepository {
  async findAll(): Promise<VideoDetailModel[]> {
    try {
      const videoDetails = await VideoDetail.find().lean();
      return videoDetails;
    } catch (error) {
      throw new Error('failed to get all video Detail from database');
    }
  }
  async findById(id: string): Promise<VideoDetailModel | null> {
    try {
      const videoDetail = await VideoDetail.findById(id);
      return videoDetail;
    } catch (error) {
      throw new Error('Failed to get video detail from database');
    }
  }
  async save(videoDetail: VideoDetailModel): Promise<void> {
    try {
      await VideoDetail.create(videoDetail);
    } catch (error) {
      throw new Error('Failed to create videoDetail into database');
    }
  }
  async update(id: string, updateVideoDetail: VideoDetailModel): Promise<void> {
    try {
      await VideoDetail.findByIdAndUpdate(id, updateVideoDetail);
    } catch (error) {
      throw new Error('Failed to update videoDetail into database');
    }
  }
  async delete(id: string): Promise<void> {
    try {
      await VideoDetail.findByIdAndDelete(id);
    } catch (error) {
      throw new Error('Failed to delete videoDetail into database');
    }
  }
}
