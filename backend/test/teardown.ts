import { execSync } from 'child_process';
import * as dotenv from 'dotenv';

dotenv.config({
  path: '.env.test',
});

module.exports = async function () {
  console.log('사용된 db를 정리합니다.');

  execSync('npx prisma migrate reset --force', {
    env: {
      ...process.env,
    },
  });
  console.log('사용된 db 정리를 완료했습니다.');
};
