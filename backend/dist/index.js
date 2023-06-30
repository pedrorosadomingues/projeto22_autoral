"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.close = exports.init = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
<<<<<<< HEAD
const config_1 = require("./config");
const routes_1 = require("./routes");
=======
const config_1 = require("./config/index");
const routes_1 = require("./routes/index");
>>>>>>> 66f21d1b9e4e995aff4f440fa769b9ec6e8ed476
(0, config_1.loadEnv)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)())
    .use(express_1.default.json())
    .get("/health", (req, res) => {
    res.send("Hello World!");
})
    .use('/user', routes_1.userRoute)
    .use('/sign-in', routes_1.authRoute)
    .use('/student', routes_1.studentRoute);
function init() {
    (0, config_1.connectDb)();
    return Promise.resolve(app);
}
exports.init = init;
async function close() {
    await (0, config_1.disconnectDB)();
}
exports.close = close;
exports.default = app;
