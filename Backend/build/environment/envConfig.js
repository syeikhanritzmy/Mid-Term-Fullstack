"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.URL_DB = exports.PORT = void 0;
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const { parsed } = dotenv_1.default.config({
    path: path_1.default.resolve('src/environment/.env'),
});
exports.PORT = (parsed === null || parsed === void 0 ? void 0 : parsed.PORT) ? parseInt(parsed.PORT, 10) : 3000;
exports.URL_DB = parsed === null || parsed === void 0 ? void 0 : parsed.URL_DB;
