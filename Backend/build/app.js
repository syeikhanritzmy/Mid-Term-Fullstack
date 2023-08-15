"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const allowedOrigins = ['http://localhost:5173'];
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        }
        else {
            callback(new Error('Akses ditolak oleh kebijakan CORS'));
        }
    },
}));
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/', index_routes_1.default);
exports.default = app;
