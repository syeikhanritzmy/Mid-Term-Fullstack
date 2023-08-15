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
exports.CommentController = void 0;
class CommentController {
    constructor(commentService) {
        this.commentService = commentService;
    }
    getCommentById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const commentId = req.params.id;
                const comment = yield this.commentService.getCommentById(commentId);
                if (comment) {
                    res.status(200).json(comment);
                }
                else {
                    res.status(404).json({
                        message: 'Comment not found',
                    });
                }
            }
            catch (error) {
                res.status(500).json({ message: 'failed to get comment' });
            }
        });
    }
    getAllComment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const comments = yield this.commentService.getAllComment();
                res.status(200).json(comments);
            }
            catch (error) {
                res.status(500).json({ message: 'Failed to get comments' });
            }
        });
    }
    createComment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, comment } = req.body;
            const { videoId } = req.params;
            const newComment = {
                username,
                comment,
                timestamp: new Date(),
                videoId,
            };
            console.log(newComment);
            try {
                yield this.commentService.createComment(newComment);
                res.status(201).json({ message: 'sucess create comment' });
            }
            catch (error) {
                res.status(500).json({ message: 'failed to create comment' });
            }
        });
    }
    updateComment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { commentId, videoId } = req.params;
            const { username, comment } = req.body;
            const updatedComment = {
                username,
                comment,
                timestamp: new Date(),
                videoId,
            };
            try {
                yield this.commentService.updateComment(commentId, updatedComment);
                res.status(200).json({ message: 'success updated comment' });
            }
            catch (error) {
                res.status(500).json({ message: 'failed updated comment' });
            }
        });
    }
    deleteComment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const commentId = req.params.id;
            try {
                yield this.commentService.deleteComment(commentId);
                res.status(200).json({ message: 'sucess deleted comment' });
            }
            catch (error) {
                res.status(500).json({ message: 'failed deleted comment' });
            }
        });
    }
}
exports.CommentController = CommentController;
