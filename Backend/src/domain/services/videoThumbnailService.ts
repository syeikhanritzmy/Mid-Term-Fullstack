import { VideoThumbnailModel } from '../models/VideoThumbnail.model';
import { VideoThumbnailRepository } from '../repositories/VideoThumbnailRepository';
export class VideoThumbnailService {
  private readonly videoThumbnailRepository: VideoThumbnailRepository;

  constructor(videoThumbnailRepository: VideoThumbnailRepository) {
    this.videoThumbnailRepository = videoThumbnailRepository;
  }

  async getVideoThumbnailId(id: string): Promise<VideoThumbnailModel | null> {
    return await this.videoThumbnailRepository.findById(id);
  }

  async getAllVideoThumbnail(): Promise<VideoThumbnailModel[]> {
    return await this.videoThumbnailRepository.findAll();
  }

  async createVideoThumbnail(
    videoThumbnail: VideoThumbnailModel
  ): Promise<void> {
    return await this.videoThumbnailRepository.save(videoThumbnail);
  }

  async updateVideoThumbnail(
    id: string,
    videoThumbnail: VideoThumbnailModel
  ): Promise<void> {
    return await this.videoThumbnailRepository.update(id, videoThumbnail);
  }

  async deleteVideoThumbnail(id: string): Promise<void> {
    return await this.videoThumbnailRepository.delete(id);
  }
}
