import { Comment } from '../models/Comment.model';

export interface CommentRepository {
  findById(id: string): Promise<Comment | null>;
  findAll(): Promise<Comment[]>;
  save(comment: Comment): Promise<void>;
  update(id: string, comment: Comment): Promise<void>;
  delete(id: string): Promise<void>;
}
