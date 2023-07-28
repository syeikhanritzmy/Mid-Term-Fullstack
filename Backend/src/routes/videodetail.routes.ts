import express from 'express';
import { VideoDetailMongooseRepository } from '../infrastructure/mongoose/repository/videoDetailMongooseRepository';
import { VideoDetailService } from '../domain/services/videoDetailService';
import { VideoDetailControllers } from '../controllers/videoDetailControllers';

const VideoDetailRouter = express.Router();

const videoDetailRepository = new VideoDetailMongooseRepository();
const videoDetailService = new VideoDetailService(videoDetailRepository);
const videoDetailController = new VideoDetailControllers(videoDetailService);

VideoDetailRouter.get('/', videoDetailController.getAllVideoDetails);
VideoDetailRouter.get('/:videoId', videoDetailController.getVideoDetailById);
VideoDetailRouter.post('/', videoDetailController.createVideoDetail);
VideoDetailRouter.put('/:videoId', videoDetailController.updateVideoDetail);
VideoDetailRouter.delete('/:videoId', videoDetailController.deleteVideoDetail);

export default VideoDetailRouter;
