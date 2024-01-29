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
exports.guestbookMailController = exports.contactMailController = void 0;
const mailService_1 = require("../services/mailService");
const contactMailController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const emailRegex = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    try {
        const { name, email, message } = req.body;
        const REQUIRE_KEYS = [name, email, message];
        Object.keys(REQUIRE_KEYS).map((key, i) => {
            if (!REQUIRE_KEYS[i]) {
                throw new Error('INVALID CONTACT MAIL INFORMATION');
            }
        });
        if (!emailRegex.test(email)) {
            throw new Error('INVALID MAIL ADDRESS');
        }
        const sendMailProcessResult = yield (0, mailService_1.contactMailService)(name, email, message);
        if (sendMailProcessResult.responseCode) {
            throw new Error(sendMailProcessResult.command);
        }
        else {
            res.status(200).json({ message: 'MAIL SUCCESSFULLY SENT' });
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
        res.status(400).json({ error: message });
    }
});
exports.contactMailController = contactMailController;
const guestbookMailController = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const sendMailProcessResult = yield (0, mailService_1.guestbookMailService)(name);
    if (sendMailProcessResult.responseCode) {
        throw new Error(sendMailProcessResult.command);
    }
});
exports.guestbookMailController = guestbookMailController;
//# sourceMappingURL=mailController.js.map