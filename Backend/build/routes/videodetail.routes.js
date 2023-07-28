"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const videoDetailMongooseRepository_1 = require("../infrastructure/mongoose/repository/videoDetailMongooseRepository");
const videoDetailService_1 = require("../domain/services/videoDetailService");
const videoDetailControllers_1 = require("../controllers/videoDetailControllers");
const VideoDetailRouter = express_1.default.Router();
const videoDetailRepository = new videoDetailMongooseRepository_1.VideoDetailMongooseRepository();
const videoDetailService = new videoDetailService_1.VideoDetailService(videoDetailRepository);
const videoDetailController = new videoDetailControllers_1.VideoDetailControllers(videoDetailService);
VideoDetailRouter.get('/', videoDetailController.getAllVideoDetails);
VideoDetailRouter.get('/:videoId', videoDetailController.getVideoDetailById);
VideoDetailRouter.post('/', videoDetailController.createVideoDetail);
VideoDetailRouter.put('/:videoId', videoDetailController.updateVideoDetail);
VideoDetailRouter.delete('/:videoId', videoDetailController.deleteVideoDetail);
exports.default = VideoDetailRouter;
