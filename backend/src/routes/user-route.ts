import { Router } from 'express';
import { userPost } from '@/controllers';

const userRoute = Router();

userRoute.post('/sign-up', userPost);

export { userRoute };
