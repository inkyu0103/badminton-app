export const queryKeys = Object.freeze({
  auth: {
    all: ["auth"],
    tokenState: ["auth", "tokenState"],
    emailToken: (token: string) => [...queryKeys.auth.all, "emailToken", token],
  },
  rackets: {
    all: ["rackets"],
    list: (brand: any, page: any) => ["rackets", "list", brand, { page }],
    single: (racketId: number) => [
      ...queryKeys.rackets.all,
      "single",
      racketId,
    ],
  },

  reviews: {
    all: ["reviews"],
    list: (racketId: number | undefined, page: number) => [
      ...queryKeys.reviews.all,
      "list",
      racketId,
      page,
    ],
    single: (reviewId: number | undefined) => ["reviews", "single", reviewId],
  },

  statistics: {
    all: ["statistics"],
    single: (racketId: number) => [...queryKeys.statistics.all, racketId],
  },
});
