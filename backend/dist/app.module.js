"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = exports.pool = void 0;
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const express = require("express");
const cors = require("cors");
const promise_1 = require("mysql2/promise");
exports.pool = promise_1.default.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'test',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
const AppModule = () => {
    const app = express();
    app.use(express.json());
    const corsOptions = {
        origin: 'http://localhost:5500',
        methods: 'GET,PUT,POST,DELETE',
        allowedHeaders: 'Content-Type,Authorization',
    };
    app.use(cors(corsOptions));
    app.get('/', (0, app_controller_1.helloWorldController)(app_service_1.helloWorld));
    app.post('/login', (0, app_controller_1.loginController)(app_service_1.loginService));
    app.post('/register', (0, app_controller_1.registerController)(app_service_1.registerService));
    app.listen(3000, () => {
        console.log('Server listening on port 3000');
    });
    return app;
};
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map