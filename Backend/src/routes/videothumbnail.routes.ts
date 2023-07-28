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

videoThumbnailRouter.get(
  '/:id',
  videoThumbNailControllers.getVideoThumbnailById
);
videoThumbnailRouter.get('/', videoThumbNailControllers.getAllVideoThumbnail);
videoThumbnailRouter.post('/', videoThumbNailControllers.createVideoThumbnail);
videoThumbnailRouter.put(
  '/:id',
  videoThumbNailControllers.updateVideoThumbnail
);
videoThumbnailRouter.delete(
  '/:id',
  videoThumbNailControllers.deleteVideoThumbnail
);

export default videoThumbnailRouter;
