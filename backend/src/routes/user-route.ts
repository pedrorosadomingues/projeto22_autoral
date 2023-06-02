import { Router } from 'express';
import { createUser } from '@/controllers';

const userRoute = Router();

userRoute.post('/', createUser);

export { userRoute };