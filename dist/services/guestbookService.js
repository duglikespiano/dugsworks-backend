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
const bcrypt_1 = __importDefault(require("bcrypt"));
const guestbookDao_1 = __importDefault(require("../models/guestbookDao"));
const env_1 = require("../env");
const fetchAllMessages = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield guestbookDao_1.default.fetchAllMessages();
});
const addMessage = (name, password, message) => __awaiter(void 0, void 0, void 0, function* () {
    const hashedPassword = yield bcrypt_1.default.hash(password, parseInt(env_1.bcryptSalt)).then((hashedPassword) => hashedPassword);
    return yield guestbookDao_1.default.addMessage(name, hashedPassword, message);
});
const deleteMessage = (messageId, password) => __awaiter(void 0, void 0, void 0, function* () {
    const messageInfoInDB = yield guestbookDao_1.default.checkPassword(messageId);
    const hashedPasswordInDB = messageInfoInDB[0].password;
    const result = yield bcrypt_1.default.compare(password, hashedPasswordInDB);
    if (result === false) {
        throw new Error('INVALID PASSWORD');
    }
    else {
        return yield guestbookDao_1.default.deleteMessage(messageId);
    }
});
exports.default = { fetchAllMessages, addMessage, deleteMessage };
//# sourceMappingURL=guestbookService.js.map