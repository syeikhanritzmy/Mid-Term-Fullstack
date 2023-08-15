"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const commentControllers_1 = require("../controllers/commentControllers");
const commentMongooseRepository_1 = require("../infrastructure/mongoose/repository/commentMongooseRepository");
const commentService_1 = require("../domain/services/commentService");
const commentRouter = (0, express_1.Router)();
const commentRepository = new commentMongooseRepository_1.CommentMongooseRepository();
const commentService = new commentService_1.CommentService(commentRepository);
const commentControllers = new commentControllers_1.CommentController(commentService);
commentRouter.get('/:id', (req, res) => {
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
exports.default = commentRouter;
