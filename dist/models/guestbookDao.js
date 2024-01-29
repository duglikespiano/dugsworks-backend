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
Object.defineProperty(exports, "__esModule", { value: true });
const launchDatabase_1 = require("../database/launchDatabase");
const fetchAllMessages = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield launchDatabase_1.myDatabase.query(`SELECT * FROM messages`);
});
const addMessage = (name, hashedPassword, message) => __awaiter(void 0, void 0, void 0, function* () {
    return yield launchDatabase_1.myDatabase.query(`INSERT INTO messages (name, password, message) VALUES (?, ?, ?)`, [
        name,
        hashedPassword,
        message,
    ]);
});
const checkPassword = (messageId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield launchDatabase_1.myDatabase.query(`SELECT * FROM messages WHERE id = (?)`, [messageId]);
});
const deleteMessage = (messageId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield launchDatabase_1.myDatabase.query(`DELETE FROM messages WHERE id = (?)`, [messageId]);
});
exports.default = { fetchAllMessages, addMessage, checkPassword, deleteMessage };
//# sourceMappingURL=guestbookDao.js.map