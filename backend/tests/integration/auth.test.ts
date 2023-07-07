import app from "../../src/index";
import supertest from "supertest";

const api = supertest(app);

describe("Auth", () => {
  
  it("should return 200 when sign in", async () => {
    const res = await api.post("/sign-in").send({
      email: "prof2@email.com",
      password: "123456",
    });
    expect(res.status).toBe(200);
  });
});
