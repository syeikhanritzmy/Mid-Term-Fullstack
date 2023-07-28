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
exports.CommentMongooseRepository = void 0;
const commentMongooseSchema_1 = require("../Schema/commentMongooseSchema");
class CommentMongooseRepository {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const comments = yield commentMongooseSchema_1.CommentModel.find();
                return comments;
            }
            catch (error) {
                throw new Error('Failed to Get comments from database');
            }
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const comment = yield commentMongooseSchema_1.CommentModel.findById(id).lean();
                return comment;
            }
            catch (error) {
                throw new Error('failed get comment from database');
            }
        });
    }
    save(comment) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield commentMongooseSchema_1.CommentModel.create(comment);
            }
            catch (error) {
                throw new Error('Failed to create comment into database');
            }
        });
    }
    update(id, comment) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield commentMongooseSchema_1.CommentModel.findByIdAndUpdate(id, comment);
            }
            catch (error) {
                throw new Error('Failed to update comment in database');
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield commentMongooseSchema_1.CommentModel.findByIdAndDelete(id);
            }
            catch (error) {
                throw new Error('Failed to delete comment from database');
            }
        });
    }
}
exports.CommentMongooseRepository = CommentMongooseRepository;
