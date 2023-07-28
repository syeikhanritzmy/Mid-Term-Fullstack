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
exports.VideoThumbailMongooseRepository = void 0;
const videoThumbnailMongooseSchema_1 = require("../Schema/videoThumbnailMongooseSchema");
class VideoThumbailMongooseRepository {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const videoThumbnails = yield videoThumbnailMongooseSchema_1.VideoThumbnail.find();
                return videoThumbnails;
            }
            catch (error) {
                throw new Error('Failed to get all video from database');
            }
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const videoThumbnail = yield videoThumbnailMongooseSchema_1.VideoThumbnail.findById(id);
                return videoThumbnail;
            }
            catch (error) {
                throw new Error('Failed to get video from database');
            }
        });
    }
    save(videoThumbnail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield videoThumbnailMongooseSchema_1.VideoThumbnail.create(videoThumbnail);
            }
            catch (error) {
                throw new Error('Failed to create video into database');
            }
        });
    }
    update(id, updatedVideoThumbnail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield videoThumbnailMongooseSchema_1.VideoThumbnail.findByIdAndUpdate(id, updatedVideoThumbnail);
            }
            catch (error) {
                throw new Error('failed to update video into database');
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield videoThumbnailMongooseSchema_1.VideoThumbnail.findByIdAndDelete(id);
            }
            catch (error) {
                throw new Error('failed to delete video from database');
            }
        });
    }
}
exports.VideoThumbailMongooseRepository = VideoThumbailMongooseRepository;
