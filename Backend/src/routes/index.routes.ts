import express from 'express';
import commentRouter from './comment.routes';
import productRouter from './product.routes';
import VideoDetailRouter from './videodetail.routes';
import videoThumbnailRouter from './videothumbnail.routes';

const indexRouter = express();

indexRouter.use('/api/comments', commentRouter);
indexRouter.use('/api/products', productRouter);
indexRouter.use('/api/video-details', VideoDetailRouter);
indexRouter.use('/api/video-thumbnails', videoThumbnailRouter);

export default indexRouter;
