import { PrismaClient, Racket } from '@prisma/client';

const client = new PrismaClient();

const testRackets: Racket[] = new Array(20).fill(0).map((_, idx) => ({
  id: idx + 10,
  name: `나노레이 ${idx + 1}`,
  image: null,
  price: 10000,
  shaft: 'FLEXIBLE',
  weight: 'W3U',
  score: 0,
  brandId: 1,
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

const main = async () => {
  console.time('⏰ total elapsed time');
  console.log('💾 Setup test data...');
  await makeTestBrand();
  console.log('✅ complete makeTestBrand');
  await makeTestRackets();
  console.log('✅ complete makeTestRackets');

  console.timeEnd('⏰ total elapsed time');
};

main()
  .catch((e) => console.error(e))
  .finally(() => client.$disconnect());
