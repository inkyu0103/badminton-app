import { PrismaClient, Racket, RacketReview, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const client = new PrismaClient();

const testRanks = ['S', 'A', 'B', 'C', 'D', 'E'] as const;

const getRandomElement = (array: any[]) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const testRackets: Racket[] = new Array(20).fill(0).map((_, idx) => ({
  id: idx + 10,
  name: `나노레이 ${idx + 1}`,
  image: null,
  price: 10000,
  shaft: 'FLEXIBLE',
  weight: ['W3U', 'W4U'],
  score: 0,
  balance: getRandomElement(['HEAD_HEAVY', 'HEAD_LIGHT', 'EVEN']),
  brandId: 1,
}));

const testUsers: User[] = new Array(20).fill(0).map((_, idx) => ({
  id: idx,
  nickname: `testUser ${idx}`,
  email: `testUser${idx}@test.com`,
  password: bcrypt.hashSync('testpassword', 10),
  birthday: new Date('1995-01-01'),
  gender: idx % 2 ? 'MALE' : 'FEMALE',
  rank: testRanks[idx % 6],
  createdAt: new Date(),
  updatedAt: new Date(),
}));

const testReviews: RacketReview[] = new Array(20).fill(0).map((_, idx) => ({
  id: idx + 20,
  control: Math.round(Math.random()),
  power: Math.round(Math.random()),
  weight: Math.floor(Math.random() * 3),
  racketId: 11,
  review: `${idx} 번 째 테스트 리뷰입니다. 라켓에 대한 정보는 따로 없습니다.`,
  userId: idx,
  starRating: Math.floor(Math.random() * 6),
  createdAt: new Date(),
  updatedAt: new Date(),
}));

const makeTestBrand = () => {
  return client.brand.create({
    data: {
      id: 1,
      name: 'yonex',
    },
  });
};

const makeTestRackets = () => {
  return client.racket.createMany({
    data: testRackets,
  });
};

const makeTestUsers = () => {
  return client.user.createMany({
    data: testUsers,
  });
};

const makeTestReviews = () => {
  return client.racketReview.createMany({
    data: testReviews,
  });
};

const main = async () => {
  console.time('⏰ total elapsed time');
  console.log('💾 Setup test data...');
  await makeTestBrand();
  console.log('✅ complete makeTestBrand');
  await makeTestRackets();
  console.log('✅ complete makeTestRackets');
  await makeTestUsers();
  console.log('✅ complete makeTestUsers');
  await makeTestReviews();
  console.log('✅ complete makeTestReviews');

  console.timeEnd('⏰ total elapsed time');
};

main()
  .catch((e) => console.error(e))
  .finally(() => client.$disconnect());
