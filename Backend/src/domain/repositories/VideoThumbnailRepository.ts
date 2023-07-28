import { VideoThumbnailModel } from '../models/VideoThumbnail.model';

export interface VideoThumbnailRepository {
  findById(id: string): Promise<VideoThumbnailModel | null>;
  findAll(): Promise<VideoThumbnailModel[]>;
  save(videoThumbnail: VideoThumbnailModel): Promise<void>;
  update(id: string, updatedVideoThumbnail: VideoThumbnailModel): Promise<void>;
  delete(id: string): Promise<void>;
}
