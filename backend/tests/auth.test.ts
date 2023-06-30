import app from '../src/index';
import supertest from 'supertest';

const api = supertest(app);

describe('Auth', () => {
  it('should return 200 when sign in', async () => {
    const res = await api.post('/sign-in')
      console.log(res);
  });
});

