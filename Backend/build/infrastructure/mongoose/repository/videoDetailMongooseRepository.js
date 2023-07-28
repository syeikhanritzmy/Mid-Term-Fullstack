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
exports.VideoDetailMongooseRepository = void 0;
const videoDetailMongooseSchema_1 = require("../Schema/videoDetailMongooseSchema");
class VideoDetailMongooseRepository {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const videoDetails = yield videoDetailMongooseSchema_1.VideoDetail.find().lean();
                return videoDetails;
            }
            catch (error) {
                throw new Error('failed to get all video Detail from database');
            }
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const videoDetail = yield videoDetailMongooseSchema_1.VideoDetail.findById(id);
                return videoDetail;
            }
            catch (error) {
                throw new Error('Failed to get video detail from database');
            }
        });
    }
    save(videoDetail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield videoDetailMongooseSchema_1.VideoDetail.create(videoDetail);
            }
            catch (error) {
                throw new Error('Failed to create videoDetail into database');
            }
        });
    }
    update(id, updateVideoDetail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield videoDetailMongooseSchema_1.VideoDetail.findByIdAndUpdate(id, updateVideoDetail);
            }
            catch (error) {
                throw new Error('Failed to update videoDetail into database');
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield videoDetailMongooseSchema_1.VideoDetail.findByIdAndDelete(id);
            }
            catch (error) {
                throw new Error('Failed to delete videoDetail into database');
            }
        });
    }
}
exports.VideoDetailMongooseRepository = VideoDetailMongooseRepository;
