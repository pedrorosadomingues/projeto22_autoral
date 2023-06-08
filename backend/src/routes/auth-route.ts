import { Router } from 'express';
import { signInPost } from '@/controllers';

const authRoute = Router();

authRoute.post('/', signInPost);

export { authRoute }
