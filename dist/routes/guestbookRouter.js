"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const guestbookController_1 = __importDefault(require("../controllers/guestbookController"));
const router = (0, express_1.Router)();
router.get('/', guestbookController_1.default.fetchAllMessages);
router.post('/', guestbookController_1.default.addMessage);
router.delete('/', guestbookController_1.default.deleteMessage);
exports.default = router;
//# sourceMappingURL=guestbookRouter.js.map