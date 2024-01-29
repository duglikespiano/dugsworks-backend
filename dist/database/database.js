"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myDatabase = void 0;
const mariadb_1 = __importDefault(require("mariadb"));
const env_1 = require("../env");
exports.myDatabase = mariadb_1.default.createPool({
    host: env_1.databaseHost,
    user: env_1.databaseUser,
    password: env_1.databasePassword,
    database: env_1.databaseName,
});
exports.myDatabase
    .getConnection()
    .then(() => console.log('DATABASE INITIALIZED'))
    .catch((error) => console.error(error));
//# sourceMappingURL=database.js.map