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
exports.VideoThumbNailControllers = void 0;
class VideoThumbNailControllers {
    constructor(videoThumbNailControllers) {
        this.VideoThumbNailControllers = videoThumbNailControllers;
    }
    getVideoThumbnailById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const videoThumbnail = yield this.VideoThumbNailControllers.getVideoThumbnailId(id);
                if (videoThumbnail) {
                    res.status(200).json(videoThumbnail);
                }
                else {
                    res.status(404).json({ message: 'Video Thumbnail not found' });
                }
            }
            catch (error) {
                res.status(500).json({ message: 'Failed to get video thumbnail' });
            }
        });
    }
    getAllVideoThumbnail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const videoThumbnail = yield this.VideoThumbNailControllers.getAllVideoThumbnail();
                res.status(200).json(videoThumbnail);
            }
            catch (error) {
                res.status(500).json({ message: 'Failed to get all video thumbnail' });
            }
        });
    }
    createVideoThumbnail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { videoId, urlImageThumbnail, productLists } = req.body;
            const newVideoThumbnail = {
                _id: '',
                videoId,
                urlImageThumbnail,
                productLists,
            };
            try {
                const createVideoThumbnail = yield this.VideoThumbNailControllers.createVideoThumbnail(newVideoThumbnail);
                res.status(201).json(createVideoThumbnail);
            }
            catch (error) {
                res.status(500).json({ message: 'Failed to create video thumbnail' });
            }
        });
    }
    updateVideoThumbnail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { videoId, productLists, urlImageThumbnail } = req.body;
            const updateVideoThumbnail = {
                _id: id,
                videoId,
                productLists,
                urlImageThumbnail,
            };
            try {
                yield this.VideoThumbNailControllers.updateVideoThumbnail(id, updateVideoThumbnail);
                res.status(200).json({ message: 'video thumbnail updated sucessfully' });
            }
            catch (error) {
                res.status(500).json({ message: 'Failed to update video thumbnail' });
            }
        });
    }
    deleteVideoThumbnail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            try {
                yield this.VideoThumbNailControllers.deleteVideoThumbnail(id);
                res.status(200).json({ message: 'VIdeo thumbnail deleted successfully' });
            }
            catch (error) {
                res.status(500).json({ message: 'Failed to delete video detail' });
            }
        });
    }
}
exports.VideoThumbNailControllers = VideoThumbNailControllers;
