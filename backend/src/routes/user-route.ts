import { Router } from 'express';
import { userPost } from '@/controllers';
import { validateBody } from '@/middlewares';
import { createUserSchema } from '@/schemas';

const userRoute = Router();

userRoute.post('/sign-up', validateBody(createUserSchema), userPost);

export { userRoute };
