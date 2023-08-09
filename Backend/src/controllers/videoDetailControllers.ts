import { Request, Response } from 'express';
import { VideoDetailService } from '../domain/services/videoDetailService';
import { VideoDetailModel } from '../domain/models/VideoDetail.model';
import { v4 as uuid } from 'uuid';
export class VideoDetailControllers {
  constructor(public videoDetailService: VideoDetailService) {}

  async getVideoDetailById(req: Request, res: Response): Promise<void> {
    const videoId = req.params.videoId;
    try {
      const videoDetail = await this.videoDetailService.getVideoDetailById(
        videoId
      );
      if (videoDetail) {
        res.status(200).json(videoDetail);
      } else {
        res.status(404).json({ message: 'Video detail not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Failed to get video detail' });
    }
  }

  async getAllVideoDetails(req: Request, res: Response): Promise<void> {
    try {
      const videoDetails = await this.videoDetailService.getAllVideoDetails();
      res.status(200).json(videoDetails);
    } catch (error) {
      res.status(500).json({ message: 'Failed to get all video details' });
    }
  }

  async createVideoDetail(req: Request, res: Response): Promise<void> {
    try {
      const { title } = req.body;
      const newVideoDetail: VideoDetailModel = {
        videoId: uuid(),
        title,
      };
      const videodetailcreated =
        await this.videoDetailService?.createVideoDetail(newVideoDetail);
      console.log('ini loeh', this.videoDetailService);
      res.status(201).json({
        videodetailcreated,
        message: 'Video detail created successfully',
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to create video detail' });
    }
  }

  async updateVideoDetail(req: Request, res: Response): Promise<void> {
    const videoId = req.params.videoId;
    const { title } = req.body;
    const updatedVideoDetail: VideoDetailModel = {
      videoId,
      title,
    };
    try {
      await this.videoDetailService.updateVideoDetail(
        videoId,
        updatedVideoDetail
      );
      res.status(200).json({ message: 'Video detail updated successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to update video detail' });
    }
  }

  async deleteVideoDetail(req: Request, res: Response): Promise<void> {
    const videoId = req.params.videoId;
    try {
      await this.videoDetailService.deleteVideoDetail(videoId);
      res.status(200).json({ message: 'Video detail deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete video detail' });
    }
  }
}
