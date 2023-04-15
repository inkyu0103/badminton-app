export const queryKeys = Object.freeze({
  auth: {
    all: ["auth"],
    tokenState: ["auth", "tokenState"],
    emailToken: (token: string) => ["auth", "emailToken", token],
  },
  rackets: {
    all: ["rackets"],
    list: (brand: any, page: any) => ["rackets", "list", brand, { page }],
  },

  reviews: {
    all: ["reviews"],
    list: (racketId: number | undefined, page: number) => [
      "reviews",
      "list",
      racketId,
      page,
    ],
    single: (reviewId: number | undefined) => ["reviews", "single", reviewId],
  },
});
