import { VideoDetailModel } from '../models/VideoDetail.model';
export interface VideoDetailRepository {
  findById(id: string): Promise<VideoDetailModel | null>;
  findAll(): Promise<VideoDetailModel[]>;
  save(videoDetail: VideoDetailModel): Promise<void>;
  update(id: string, updateVideoDetail: VideoDetailModel): Promise<void>;
  delete(id: string): Promise<void>;
}
