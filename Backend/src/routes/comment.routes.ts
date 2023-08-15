import { Request, Response, Router } from 'express';

import { CommentController } from '../controllers/commentControllers';
import { CommentMongooseRepository } from '../infrastructure/mongoose/repository/commentMongooseRepository';
import { CommentService } from '../domain/services/commentService';

const commentRouter = Router();

const commentRepository = new CommentMongooseRepository();
const commentService = new CommentService(commentRepository);
const commentControllers = new CommentController(commentService);

commentRouter.get('/:id', (req: Request, res: Response) => {
  commentControllers.getCommentById(req, res);
});
commentRouter.get('/', (req, res) => {
  commentControllers.getAllComment(req, res);
});
commentRouter.post('/:videoId', (req, res) => {
  commentControllers.createComment(req, res);
});
commentRouter.put('/:videoId/:id', (req, res) => {
  commentControllers.updateComment(req, res);
});
commentRouter.delete('/:videoId/:id', (req, res) => {
  commentControllers.deleteComment(req, res);
});

export default commentRouter;
