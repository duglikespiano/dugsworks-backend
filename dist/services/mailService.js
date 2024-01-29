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
exports.guestbookMailService = exports.contactMailService = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const env_1 = require("../app/env");
const contactMailService = (name, email, message) => __awaiter(void 0, void 0, void 0, function* () {
    const transporter = nodemailer_1.default.createTransport({
        service: env_1.mailService,
        auth: {
            user: env_1.mailServiceAddress,
            pass: env_1.mailServicePassword,
        },
    });
    return transporter
        .sendMail({
        from: {
            name: env_1.mailServiceName,
            address: env_1.mailServiceAddress,
        },
        to: {
            name: env_1.mailServiceName,
            address: env_1.mailServiceAddress,
        },
        subject: `[Dug's Works] You got an email from ${name}`,
        text: `Guest name ${name} has sent you an email\nEmail address is ${email}\nBelow is the message\n\n${message}`,
    })
        .then((data) => data)
        .catch((error) => error);
});
exports.contactMailService = contactMailService;
const guestbookMailService = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const transporter = nodemailer_1.default.createTransport({
        service: env_1.mailService,
        auth: {
            user: env_1.mailServiceAddress,
            pass: env_1.mailServicePassword,
        },
    });
    return transporter
        .sendMail({
        from: {
            name: env_1.mailServiceName,
            address: env_1.mailServiceAddress,
        },
        to: {
            name: env_1.mailServiceName,
            address: env_1.mailServiceAddress,
        },
        subject: `[Dug's Works] A message on guestbook has been added`,
        text: `Guest name ${name} has added a message on guestbook\nPlease check it`,
    })
        .then((data) => data)
        .catch((error) => error);
});
exports.guestbookMailService = guestbookMailService;
//# sourceMappingURL=mailService.js.map