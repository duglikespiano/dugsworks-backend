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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mailController_1 = require("./mailController");
const guestbookService_1 = __importDefault(require("../services/guestbookService"));
const fetchAllMessages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allMessages = yield guestbookService_1.default.fetchAllMessages();
        res.status(200).json({ data: allMessages });
    }
    catch (error) {
        let message;
        if (error instanceof Error) {
            message = error.message;
        }
        else if (error && typeof error === 'object' && 'message' in error) {
            message = error.message;
        }
        else if (typeof error === 'string') {
            message = error;
        }
        else {
            message = 'UNKNOWN ERROR OCCURRED';
        }
        res.status(400).json({ error: message });
    }
});
const addMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, password, message } = req.body;
        const REQUIRE_KEYS = [name, password, message];
        Object.keys(REQUIRE_KEYS).map((key, i) => {
            if (!REQUIRE_KEYS[i]) {
                throw new Error('INVALID DATA');
            }
        });
        const queryResult = yield guestbookService_1.default.addMessage(name, password, message);
        if (queryResult['affectedRows'] > 0) {
            res.status(201).json({ message: 'MESSAGE ADDED', messageId: parseInt(queryResult.insertId.toString()) });
            yield (0, mailController_1.guestbookMailController)(name);
        }
        else {
            throw new Error('NO MESSAGE ADDED');
        }
    }
    catch (error) {
        let message;
        if (error instanceof Error) {
            message = error.message;
            if (error.name === 'SqlError') {
                message = error.name;
            }
        }
        else if (error && typeof error === 'object' && 'message' in error) {
            message = error.message;
        }
        else if (typeof error === 'string') {
            message = error;
        }
        else {
            message = 'UNKNOWN ERROR OCCURRED';
        }
        console.error(error);
        res.status(400).json({ error: message });
    }
});
const deleteMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { messageId, password } = req.body;
        const REQUIRE_KEYS = [messageId, password];
        Object.keys(REQUIRE_KEYS).map((key, i) => {
            if (!REQUIRE_KEYS[i]) {
                throw new Error('INVALID DATA');
            }
        });
        const queryResult = yield guestbookService_1.default.deleteMessage(messageId, password);
        if (queryResult.name === 'SqlError') {
            throw new Error('SqlError');
        }
        else {
            res.status(200).json({ message: 'MESSAGE DELETED' });
        }
    }
    catch (error) {
        let message;
        if (error instanceof Error) {
            message = error.message;
        }
        else if (error && typeof error === 'object' && 'message' in error) {
            message = error.message;
        }
        else if (typeof error === 'string') {
            message = error;
        }
        else {
            message = 'UNKNOWN ERROR OCCURRED';
        }
        console.error(error);
        res.status(400).json({ error: message });
    }
});
exports.default = { fetchAllMessages, addMessage, deleteMessage };
//# sourceMappingURL=guestbookController.js.map