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
exports.VideoDetailControllers = void 0;
const uuid_1 = require("uuid");
class VideoDetailControllers {
    constructor(videoDetailService) {
        this.videoDetailService = videoDetailService;
    }
    getVideoDetailById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const videoId = req.params.videoId;
            try {
                const videoDetail = yield this.videoDetailService.getVideoDetailById(videoId);
                if (videoDetail) {
                    res.status(200).json(videoDetail);
                }
                else {
                    res.status(404).json({ message: 'Video detail not found' });
                }
            }
            catch (error) {
                res.status(500).json({ message: 'Failed to get video detail' });
            }
        });
    }
    getAllVideoDetails(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const videoDetails = yield this.videoDetailService.getAllVideoDetails();
                res.status(200).json(videoDetails);
            }
            catch (error) {
                res.status(500).json({ message: 'Failed to get all video details' });
            }
        });
    }
    createVideoDetail(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title } = req.body;
                const newVideoDetail = {
                    videoId: (0, uuid_1.v4)(),
                    title,
                };
                const videodetailcreated = yield ((_a = this.videoDetailService) === null || _a === void 0 ? void 0 : _a.createVideoDetail(newVideoDetail));
                console.log('ini loeh', this.videoDetailService);
                res.status(201).json({
                    videodetailcreated,
                    message: 'Video detail created successfully',
                });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Failed to create video detail' });
            }
        });
    }
    updateVideoDetail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const videoId = req.params.videoId;
            const { title } = req.body;
            const updatedVideoDetail = {
                videoId,
                title,
            };
            try {
                yield this.videoDetailService.updateVideoDetail(videoId, updatedVideoDetail);
                res.status(200).json({ message: 'Video detail updated successfully' });
            }
            catch (error) {
                res.status(500).json({ message: 'Failed to update video detail' });
            }
        });
    }
    deleteVideoDetail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const videoId = req.params.videoId;
            try {
                yield this.videoDetailService.deleteVideoDetail(videoId);
                res.status(200).json({ message: 'Video detail deleted successfully' });
            }
            catch (error) {
                res.status(500).json({ message: 'Failed to delete video detail' });
            }
        });
    }
}
exports.VideoDetailControllers = VideoDetailControllers;
