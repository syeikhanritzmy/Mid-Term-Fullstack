import express from 'express';
import { VideoThumbailMongooseRepository } from '../infrastructure/mongoose/repository/videoThumbnailMongooseRepository';
import { VideoThumbnailService } from '../domain/services/videoThumbnailService';
import { VideoThumbNailControllers } from '../controllers/videoThumbnailControllers';

const videoThumbnailRouter = express.Router();
const videoThumbnailRepository = new VideoThumbailMongooseRepository();
const videoThumbnailService = new VideoThumbnailService(
  videoThumbnailRepository
);

const videoThumbNailControllers = new VideoThumbNailControllers(
  videoThumbnailService
);

videoThumbnailRouter.get('/:id', (req, res) => {
  videoThumbNailControllers.getVideoThumbnailById(req, res);
});
videoThumbnailRouter.get('/', (req, res) => {
  videoThumbNailControllers.getAllVideoThumbnail(req, res);
});
videoThumbnailRouter.post('/', (req, res) => {
  videoThumbNailControllers.createVideoThumbnail(req, res);
});
videoThumbnailRouter.put('/:id', (req, res) => {
  videoThumbNailControllers.updateVideoThumbnail(req, res);
});
videoThumbnailRouter.delete('/:id', (req, res) => {
  videoThumbNailControllers.deleteVideoThumbnail(req, res);
});

export default videoThumbnailRouter;
