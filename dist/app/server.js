"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.backendServerStart = void 0;
const app_1 = require("./app");
const env_1 = require("./env");
const backendServerStart = () => {
    app_1.app.listen(env_1.port, '0.0.0.0', () => {
        if (!env_1.port) {
            throw new Error('PORT INVALID');
        }
        else {
            console.log(`SERVER IS LISTENING ON PORT ${env_1.port}!`);
        }
    });
};
exports.backendServerStart = backendServerStart;
//# sourceMappingURL=server.js.map