import { Router } from 'express';
import { postSignIn } from '@/controllers';

const authRoute = Router();

authRoute.post('/', postSignIn);

export { authRoute }
