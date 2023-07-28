"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const database_1 = require("./config/database");
const envConfig_1 = require("./config/envConfig");
(0, database_1.connectToDatabase)()
    .then(() => {
    app_1.default.listen(envConfig_1.PORT, () => {
        console.log(`Server started on port ${envConfig_1.PORT}`);
    });
})
    .catch((err) => {
    console.error('Error Connecting to database', err);
});
