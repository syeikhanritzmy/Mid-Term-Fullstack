"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const comment_routes_1 = __importDefault(require("./comment.routes"));
const product_routes_1 = __importDefault(require("./product.routes"));
const videodetail_routes_1 = __importDefault(require("./videodetail.routes"));
const videothumbnail_routes_1 = __importDefault(require("./videothumbnail.routes"));
const indexRouter = (0, express_1.default)();
indexRouter.use('api/comments', comment_routes_1.default);
indexRouter.use('api/products', product_routes_1.default);
indexRouter.use('api/video-details', videodetail_routes_1.default);
indexRouter.use('api/video-thumbnails', videothumbnail_routes_1.default);
exports.default = indexRouter;
