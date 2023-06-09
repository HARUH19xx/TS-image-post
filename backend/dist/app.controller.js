"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appController = exports.registerController = exports.loginController = exports.helloWorldController = void 0;
const helloWorldController = (service) => (req, res) => {
    res.send(service.getHello());
};
exports.helloWorldController = helloWorldController;
const loginController = (service) => (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    const result = service.login(name, password);
    if (result) {
        res.status(200).send({ success: true });
    }
    else {
        res.status(401).send({ error: 'Invalid username or password' });
    }
};
exports.loginController = loginController;
const registerController = (service) => async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const result = service.register(username, password);
    if (await result === 'User registered successfully!') {
        res.status(200).send({ success: true });
    }
    else {
        res.status(400).send({ error: result });
    }
};
exports.registerController = registerController;
const appController = (service) => {
    return (req, res) => {
        res.send(service.getHello());
    };
};
exports.appController = appController;
//# sourceMappingURL=app.controller.js.map