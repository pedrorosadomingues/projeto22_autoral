"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../src/index"));
const supertest_1 = __importDefault(require("supertest"));
const api = (0, supertest_1.default)(index_1.default);
describe('Auth', () => {
    it('should return 200 when sign in', async () => {
        const res = await api.post('/sign-in');
        console.log(res);
    });
});
