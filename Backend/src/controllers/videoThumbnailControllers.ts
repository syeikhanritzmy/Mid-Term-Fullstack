import { Request, Response } from 'express';
import { VideoThumbnailService } from '../domain/services/videoThumbnailService';
import { VideoThumbnailModel } from '../domain/models/VideoThumbnail.model';

export class VideoThumbNailControllers {
  private VideoThumbNailControllers: VideoThumbnailService;

  constructor(videoThumbNailControllers: VideoThumbnailService) {
    this.VideoThumbNailControllers = videoThumbNailControllers;
  }

  async getVideoThumbnailById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const videoThumbnail =
        await this.VideoThumbNailControllers.getVideoThumbnailId(id);
      if (videoThumbnail) {
        res.status(200).json(videoThumbnail);
      } else {
        res.status(404).json({ message: 'Video Thumbnail not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Failed to get video thumbnail' });
    }
  }

  async getAllVideoThumbnail(req: Request, res: Response): Promise<void> {
    try {
      const videoThumbnail =
        await this.VideoThumbNailControllers.getAllVideoThumbnail();
      res.status(200).json(videoThumbnail);
    } catch (error) {
      res.status(500).json({ message: 'Failed to get all video thumbnail' });
    }
  }
  async createVideoThumbnail(req: Request, res: Response): Promise<void> {
    const { videoId, urlImageThumbnail } = req.body;
    const newVideoThumbnail: VideoThumbnailModel = {
      videoId,
      urlImageThumbnail,
    };
    try {
      const createVideoThumbnail =
        await this.VideoThumbNailControllers.createVideoThumbnail(
          newVideoThumbnail
        );
      res.status(201).json(createVideoThumbnail);
    } catch (error) {
      res.status(500).json({ message: 'Failed to create video thumbnail' });
    }
  }

  async updateVideoThumbnail(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { videoId, urlImageThumbnail } = req.body;
    const updateVideoThumbnail: VideoThumbnailModel = {
      _id: id,
      videoId,
      urlImageThumbnail,
    };
    try {
      await this.VideoThumbNailControllers.updateVideoThumbnail(
        id,
        updateVideoThumbnail
      );

      res.status(200).json({ message: 'video thumbnail updated sucessfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to update video thumbnail' });
    }
  }
  async deleteVideoThumbnail(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    try {
      await this.VideoThumbNailControllers.deleteVideoThumbnail(id);
      res.status(200).json({ message: 'VIdeo thumbnail deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete video detail' });
    }
  }
}
