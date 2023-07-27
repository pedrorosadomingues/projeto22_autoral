import app, { init } from "@/index";
import supertest from "supertest";
import httpStatus from "http-status";
import { prisma } from "@/config";
import { limparBanco } from "../helpers";

beforeAll(async () => {
  await init();
});

afterAll(async () => {
  await limparBanco();
});
const api = supertest(app);

describe("GET /student", () => {
  it("should respond with status 401 if no token is given", async () => {
    const response = await api.get("/student");

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });
});
