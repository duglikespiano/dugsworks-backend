"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("../routes/router"));
const env_1 = require("./env");
exports.app = (0, express_1.default)();
const corsOptions = {
    origin: env_1.frontendServerEndpoint,
    optionsSuccessStatus: 200,
};
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)(corsOptions));
exports.app.use(router_1.default);
//# sourceMappingURL=app.js.map