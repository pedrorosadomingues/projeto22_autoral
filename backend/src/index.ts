import express, { Express } from "express";
import cors from "cors";
import { loadEnv, connectDb, disconnectDB } from "@/config";
import { authRoute, userRoute, studentRoute } from "@/routes";
loadEnv();

const app = express();

app.use(cors())
.use(express.json())
.get("/health", (req, res) => {
  res.send("Hello World!");
})
.use('/user', userRoute)
.use('/sign-in', authRoute)
.use('/student', studentRoute)


export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
