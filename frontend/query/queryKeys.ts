export const queryKeys = Object.freeze({
  auth: {
    tokenState: ["auth", "tokenState"],
  },
  rackets: {
    list: (brand: any, page: any) => ["rackets", "list", brand, { page }],
  },
});
