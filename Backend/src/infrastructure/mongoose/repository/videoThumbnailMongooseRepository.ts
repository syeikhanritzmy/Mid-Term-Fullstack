import { VideoThumbnailModel } from '../../../domain/models/VideoThumbnail.model';
import { VideoThumbnailRepository } from '../../../domain/repositories/VideoThumbnailRepository';
import { VideoThumbnail } from '../Schema/videoThumbnailMongooseSchema';

export class VideoThumbailMongooseRepository
  implements VideoThumbnailRepository
{
  async findAll(): Promise<VideoThumbnailModel[]> {
    try {
      const videoThumbnails = await VideoThumbnail.find();
      return videoThumbnails;
    } catch (error) {
      throw new Error('Failed to get all video from database');
    }
  }
  async findById(id: string): Promise<VideoThumbnailModel | null> {
    try {
      const videoThumbnail = await VideoThumbnail.findById(id);
      return videoThumbnail;
    } catch (error) {
      throw new Error('Failed to get video from database');
    }
  }
  async save(videoThumbnail: VideoThumbnailModel): Promise<void> {
    try {
      await VideoThumbnail.create(videoThumbnail);
    } catch (error) {
      throw new Error('Failed to create video into database');
    }
  }
  async update(
    id: string,
    updatedVideoThumbnail: VideoThumbnailModel
  ): Promise<void> {
    try {
      await VideoThumbnail.findByIdAndUpdate(id, updatedVideoThumbnail);
    } catch (error) {
      throw new Error('failed to update video into database');
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await VideoThumbnail.findByIdAndDelete(id);
    } catch (error) {
      throw new Error('failed to delete video from database');
    }
  }
}
