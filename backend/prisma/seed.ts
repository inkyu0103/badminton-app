import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

const testRacket = () =>
  [...Array(20).keys()].map(
    async (idx, _) =>
      await client.racket.create({
        data: {
          id: idx + 10,
          name: `나노레이 ${idx + 1}`,
          rating: 5,
          image: null,
          price: 10000,
          shaft: 'FLEXIBLE',
          weight: 'W3U',
          score: 5,
          brandId: 1,
        },
      }),
  );

const main = async () => {
  Promise.all(testRacket());
};

main()
  .catch((e) => console.error(e))
  .finally(() => client.$disconnect());
