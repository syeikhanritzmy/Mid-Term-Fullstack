import { Comment } from '../../../domain/models/Comment.model';
import { CommentRepository } from '../../../domain/repositories/CommentRepository';
import { CommentModel } from '../Schema/commentMongooseSchema';

export class CommentMongooseRepository implements CommentRepository {
  async findAll(): Promise<Comment[]> {
    try {
      const comments = await CommentModel.find();
      return comments;
    } catch (error) {
      throw new Error('Failed to Get comments from database');
    }
  }
  async findById(id: string): Promise<Comment | null> {
    try {
      const comment = await CommentModel.findById(id).lean();
      return comment;
    } catch (error) {
      throw new Error('failed get comment from database');
    }
  }
  async save(comment: Comment): Promise<void> {
    try {
      await CommentModel.create(comment);
    } catch (error) {
      throw new Error('Failed to create comment into database');
    }
  }

  async update(id: string, comment: Comment): Promise<void> {
    try {
      await CommentModel.findByIdAndUpdate(id, comment);
    } catch (error) {
      throw new Error('Failed to update comment in database');
    }
  }
  async delete(id: string): Promise<void> {
    try {
      await CommentModel.findByIdAndDelete(id);
    } catch (error) {
      throw new Error('Failed to delete comment from database');
    }
  }
}

