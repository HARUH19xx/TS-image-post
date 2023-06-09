"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginService = exports.registerService = exports.helloWorld = void 0;
const app_module_1 = require("./app.module");
const bcrypt = require("bcrypt");
exports.helloWorld = {
    getHello: () => 'こんにちは、みなさん！',
};
exports.registerService = {
    register: async (username, password) => {
        const [existingUser] = await app_module_1.pool.query('SELECT * FROM users WHERE username = ?', [username]);
        if (existingUser.length > 0) {
            return 'This username is already taken.';
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await app_module_1.pool.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);
        return 'User registered successfully!';
    },
    authenticate: async (username, password) => {
        const [user] = await app_module_1.pool.query('SELECT * FROM users WHERE username = ?', [username]);
        if (user.length > 0) {
            const match = await bcrypt.compare(password, user[0].password);
            return match ? 'User authenticated successfully!' : 'Invalid username or password.';
        }
        else {
            return 'Invalid username or password.';
        }
    }
};
exports.loginService = {
    login: async (username, password) => {
        const authenticationResult = await exports.registerService.authenticate(username, password);
        return authenticationResult === 'User authenticated successfully!';
    },
};
//# sourceMappingURL=app.service.js.map