import { VideoDetailModel } from '../models/VideoDetail.model';
import { VideoDetailRepository } from '../repositories/VideoDetailRepository';

export class VideoDetailService {
  private readonly videoDetailRepository: VideoDetailRepository;

  constructor(videoDetailRepository: VideoDetailRepository) {
    this.videoDetailRepository = videoDetailRepository;
  }

  async getVideoDetailById(id: string): Promise<VideoDetailModel | null> {
    return await this.videoDetailRepository.findById(id);
  }

  async getAllVideoDetails(): Promise<VideoDetailModel[]> {
    return await this.videoDetailRepository.findAll();
  }

  async createVideoDetail(videoDetail: VideoDetailModel): Promise<void> {
    return await this.videoDetailRepository.save(videoDetail);
  }

  async updateVideoDetail(
    id: string,
    videoDetail: VideoDetailModel
  ): Promise<void> {
    return await this.videoDetailRepository.update(id, videoDetail);
  }

  async deleteVideoDetail(id: string): Promise<void> {
    return this.videoDetailRepository.delete(id);
  }
}
