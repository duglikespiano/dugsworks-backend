"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bcryptSalt = exports.databaseName = exports.databasePassword = exports.databaseUser = exports.databaseURL = exports.databasePort = exports.databaseHost = exports.mailServicePassword = exports.mailServiceAddress = exports.mailServiceName = exports.mailService = exports.frontendServerEndpoint = exports.backendServerPort = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.backendServerPort = process.env.BACKEND_SERVER_PORT;
exports.frontendServerEndpoint = process.env.FRONTEND_SERVER_ENDPOINT;
exports.mailService = process.env.MAIL_SERVICE;
exports.mailServiceName = process.env.MAIL_SERVICE_NAME;
exports.mailServiceAddress = process.env.MAIL_SERVICE_ADDRESS;
exports.mailServicePassword = process.env.MAIL_SERVICE_PASSWORD;
exports.databaseHost = process.env.DATABASE_HOST;
exports.databasePort = process.env.DATABASE_PORT;
exports.databaseURL = process.env.DATABASE_URL;
exports.databaseUser = process.env.DATABASE_USER;
exports.databasePassword = process.env.DATABASE_PASSWORD;
exports.databaseName = process.env.DATABASE_NAME;
exports.bcryptSalt = process.env.BCRYPT_SALT;
//# sourceMappingURL=env.js.map