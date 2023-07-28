import { Comment } from '../models/Comment.model';
import { CommentRepository } from '../repositories/CommentRepository';

export class CommentService {
  private commentRepository: CommentRepository;

  constructor(commentRepository: CommentRepository) {
    this.commentRepository = commentRepository;
  }

  async getCommentById(id: string): Promise<Comment | null> {
    return await this.commentRepository.findById(id);
  }

  async getAllComment(): Promise<Comment[]> {
    return await this.commentRepository.findAll();
  }

  async createComment(comment: Comment): Promise<void> {
    if (!comment.comment) {
      throw new Error('comment must be filled in ');
    }

    comment.timestamp = new Date();

    return  await this.commentRepository.save(comment);
  }
  async updateComment(id: string, updateComment: Comment): Promise<void> {
    const idComment = await this.commentRepository.findById(id);
    if (!idComment) {
      throw new Error('comment not found');
    }
    return await this.commentRepository.update(id, updateComment);
  }
  async deleteComment(id: string): Promise<void> {
    const idComment = await this.commentRepository.findById(id);
    if (!idComment) {
      throw new Error('comment not found.');
    }

    return await this.commentRepository.delete(id);
  }
}
