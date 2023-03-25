import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

const testRacket = () =>
  [...Array(20).keys()].map(
    async (idx, _) =>
      await client.racket.createMany({
        data: {
          brand: 'yonex',
          name: `나노레이 ${idx + 1}`,
          rating: 5,
          image: null,
          price: 10000,
          shaft: 'FLEXIBLE',
          weight: 'W3U',
          score: 5,
        },
      }),
  );

const main = async () => {
  Promise.all(testRacket());
};

main()
  .catch((e) => console.error(e))
  .finally(() => client.$disconnect());
