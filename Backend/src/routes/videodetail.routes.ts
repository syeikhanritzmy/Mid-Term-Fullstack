import express from 'express';
import { VideoDetailMongooseRepository } from '../infrastructure/mongoose/repository/videoDetailMongooseRepository';
import { VideoDetailService } from '../domain/services/videoDetailService';
import { VideoDetailControllers } from '../controllers/videoDetailControllers';

const VideoDetailRouter = express.Router();

const videoDetailRepository = new VideoDetailMongooseRepository();
const videoDetailService = new VideoDetailService(videoDetailRepository);
const videoDetailController = new VideoDetailControllers(videoDetailService);

VideoDetailRouter.get('/', (req, res) =>
  videoDetailController.getAllVideoDetails(req, res)
);
VideoDetailRouter.get('/:videoId', (req, res) =>
  videoDetailController.getVideoDetailById(req, res)
);
VideoDetailRouter.post('/', (req, res) =>
  videoDetailController.createVideoDetail(req, res)
);
VideoDetailRouter.put('/:videoId', (req, res) =>
  videoDetailController.updateVideoDetail(req, res)
);
VideoDetailRouter.delete('/:videoId', (req, res) =>
  videoDetailController.deleteVideoDetail(req, res)
);

export default VideoDetailRouter;
