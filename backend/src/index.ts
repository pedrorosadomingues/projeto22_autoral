import express, { Express } from "express";
import cors from "cors";
import { loadEnv, connectDb, disconnectDB } from "@/config";
import { authRoute, userRoute, studentRoute } from "@/routes";
loadEnv();

const app = express();

const corsOptions = {
  origin: "http://ec2-3-93-239-69.compute-1.amazonaws.com",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
};

app.use(cors(corsOptions))

  .use(express.json())
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
