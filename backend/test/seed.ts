import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const testAccount = {
  id: 3000,
  email: 'test@test.com',
  password: bcrypt.hashSync('testPassword', 10),
  nickname: 'testUser',
  birthday: new Date(-1),
  gender: 'MALE' as const,
  rank: 'A' as const,
};

const main = async () => {
  return await prisma.user.create({
    data: {
      ...testAccount,
    },
  });
};

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
