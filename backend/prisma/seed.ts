import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

const testRacket = () =>
  [...Array(20).keys()].map(
    async (idx, _) =>
      await client.racket.createMany({
        data: {
          brand: 'YONEX',
          name: `나노레이 ${idx + 1}`,
          price: 10000,
          rating: 5,
          shaft: 'FLEXIBLE',
          weight: 'W3U',
          racketId: idx + 1,
        },
      }),
  );

const main = async () => {
  Promise.all(testRacket());
};

main()
  .catch((e) => console.error(e))
  .finally(() => client.$disconnect());
