"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mailController_1 = require("../controllers/mailController");
const router = (0, express_1.Router)();
router.post('/contact', mailController_1.contactMailController);
exports.default = router;
//# sourceMappingURL=mailRouter.js.map