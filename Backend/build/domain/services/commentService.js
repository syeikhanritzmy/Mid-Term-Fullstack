"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
class CommentService {
    constructor(commentRepository) {
        this.commentRepository = commentRepository;
    }
    getCommentById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.commentRepository.findById(id);
        });
    }
    getAllComment() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.commentRepository.findAll();
        });
    }
    createComment(comment) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!comment.comment) {
                throw new Error('comment must be filled in ');
            }
            comment.timestamp = new Date();
            return yield this.commentRepository.save(comment);
        });
    }
    updateComment(id, updateComment) {
        return __awaiter(this, void 0, void 0, function* () {
            const idComment = yield this.commentRepository.findById(id);
            if (!idComment) {
                throw new Error('comment not found');
            }
            return yield this.commentRepository.update(id, updateComment);
        });
    }
    deleteComment(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const idComment = yield this.commentRepository.findById(id);
            if (!idComment) {
                throw new Error('comment not found.');
            }
            return yield this.commentRepository.delete(id);
        });
    }
}
exports.CommentService = CommentService;
