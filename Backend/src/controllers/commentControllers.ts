import { Request, Response } from 'express';
import { CommentService } from '../domain/services/commentService';
import { Comment } from '../domain/models/Comment.model';

export class CommentController {
  private commentService: CommentService;

  constructor(commentService: CommentService) {
    this.commentService = commentService;
  }

  async getCommentById(req: Request, res: Response): Promise<void> {
    try {
      const commentId = req.params.id;
      const comment = await this.commentService.getCommentById(commentId);
      if (comment) {
        res.status(200).json(comment);
      } else {
        res.status(404).json({
          message: 'Comment not found',
        });
      }
    } catch (error) {
      res.status(500).json({ message: 'failed to get comment' });
    }
  }

  async getAllComment(req: Request, res: Response): Promise<void> {
    try {
      const comments = await this.commentService.getAllComment();
      res.status(200).json(comments);
    } catch (error) {
      res.status(500).json({ message: 'Failed to get comments' });
    }
  }
  async createComment(req: Request, res: Response): Promise<void> {
    const { username, comment } = req.body;
    const { videoId } = req.params;
    const newComment: Comment = {
      username,
      comment,
      timestamp: new Date(),
      videoId,
    };
    console.log(newComment);
    try {
      await this.commentService.createComment(newComment);
      res.status(201).json({ message: 'sucess create comment' });
    } catch (error) {
      res.status(500).json({ message: 'failed to create comment' });
    }
  }
  async updateComment(req: Request, res: Response): Promise<void> {
    const { commentId, videoId } = req.params;
    const { username, comment } = req.body;

    const updatedComment: Comment = {
      username,
      comment,
      timestamp: new Date(),
      videoId,
    };

    try {
      await this.commentService.updateComment(commentId, updatedComment);
      res.status(200).json({ message: 'success updated comment' });
    } catch (error) {
      res.status(500).json({ message: 'failed updated comment' });
    }
  }

  async deleteComment(req: Request, res: Response): Promise<void> {
    const commentId = req.params.id;
    try {
      await this.commentService.deleteComment(commentId);
      res.status(200).json({ message: 'sucess deleted comment' });
    } catch (error) {
      res.status(500).json({ message: 'failed deleted comment' });
    }
  }
}
