import { execSync } from 'child_process';
import * as dotenv from 'dotenv';

dotenv.config({
  path: '.env.test',
});

beforeAll(async () => {
  console.log('test db를 생성합니다.');
  execSync('npx prisma db push', {
    env: {
      ...process.env,
    },
  });
  console.log('test db를 생성 완료!');
});

afterAll(async () => {
  execSync('npx prisma db drop', {
    env: {
      ...process.env,
    },
  });
});
