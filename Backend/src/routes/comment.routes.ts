import { Router } from 'express';

import { CommentController } from '../controllers/commentControllers';
import { CommentMongooseRepository } from '../infrastructure/mongoose/repository/commentMongooseRepository';
import { CommentService } from '../domain/services/commentService';

const commentRouter = Router();

const commentRepository = new CommentMongooseRepository();
const commentService = new CommentService(commentRepository);
const commentControllers = new CommentController(commentService);

commentRouter.get('/:id', commentControllers.getCommentById);
commentRouter.get('/', commentControllers.getAllComment);
commentRouter.post('/', commentControllers.createComment);
commentRouter.put('/:videoId/:id', commentControllers.updateComment);
commentRouter.delete('/:videoId/:id', commentControllers.deleteComment);

export default commentRouter;
