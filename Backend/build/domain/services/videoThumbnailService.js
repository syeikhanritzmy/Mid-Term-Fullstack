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
exports.VideoThumbnailService = void 0;
class VideoThumbnailService {
    constructor(videoThumbnailRepository) {
        this.videoThumbnailRepository = videoThumbnailRepository;
    }
    getVideoThumbnailId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.videoThumbnailRepository.findById(id);
        });
    }
    getAllVideoThumbnail() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.videoThumbnailRepository.findAll();
        });
    }
    createVideoThumbnail(videoThumbnail) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.videoThumbnailRepository.save(videoThumbnail);
        });
    }
    updateVideoThumbnail(id, videoThumbnail) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.videoThumbnailRepository.update(id, videoThumbnail);
        });
    }
    deleteVideoThumbnail(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.videoThumbnailRepository.delete(id);
        });
    }
}
exports.VideoThumbnailService = VideoThumbnailService;
