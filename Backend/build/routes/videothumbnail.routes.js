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
videoThumbnailRouter.get('/:id', videoThumbNailControllers.getVideoThumbnailById);
videoThumbnailRouter.get('/', videoThumbNailControllers.getAllVideoThumbnail);
videoThumbnailRouter.post('/', videoThumbNailControllers.createVideoThumbnail);
videoThumbnailRouter.put('/:id', videoThumbNailControllers.updateVideoThumbnail);
videoThumbnailRouter.delete('/:id', videoThumbNailControllers.deleteVideoThumbnail);
exports.default = videoThumbnailRouter;
