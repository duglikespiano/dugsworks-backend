"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pingRouter_1 = __importDefault(require("./pingRouter"));
const mailRouter_1 = __importDefault(require("./mailRouter"));
const guestbookRouter_1 = __importDefault(require("./guestbookRouter"));
const router = (0, express_1.Router)();
router.use('/ping', pingRouter_1.default);
router.use('/mail', mailRouter_1.default);
router.use('/guestbook', guestbookRouter_1.default);
exports.default = router;
//# sourceMappingURL=routes.js.map