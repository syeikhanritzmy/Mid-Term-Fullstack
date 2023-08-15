"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const videoThumbnailMongooseRepository_1 = require("../infrastructure/mongoose/repository/videoThumbnailMongooseRepository");
const videoThumbnailService_1 = require("../domain/services/videoThumbnailService");
const videoThumbnailControllers_1 = require("../controllers/videoThumbnailControllers");
const videoThumbnailRouter = express_1.default.Router();
const videoThumbnailRepository = new videoThumbnailMongooseRepository_1.VideoThumbailMongooseRepository();
const videoThumbnailService = new videoThumbnailService_1.VideoThumbnailService(videoThumbnailRepository);
const videoThumbNailControllers = new videoThumbnailControllers_1.VideoThumbNailControllers(videoThumbnailService);
videoThumbnailRouter.get('/:id', (req, res) => {
    videoThumbNailControllers.getVideoThumbnailById(req, res);
});
videoThumbnailRouter.get('/', (req, res) => {
    videoThumbNailControllers.getAllVideoThumbnail(req, res);
});
videoThumbnailRouter.post('/', (req, res) => {
    videoThumbNailControllers.createVideoThumbnail(req, res);
});
videoThumbnailRouter.put('/:id', (req, res) => {
    videoThumbNailControllers.updateVideoThumbnail(req, res);
});
videoThumbnailRouter.delete('/:id', (req, res) => {
    videoThumbNailControllers.deleteVideoThumbnail(req, res);
});
exports.default = videoThumbnailRouter;
