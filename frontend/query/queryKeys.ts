export const queryKeys = Object.freeze({
  auth: {
    tokenState: ["auth", "tokenState"],
    emailToken: (token: string) => ["auth", "emailToken", token],
  },
  rackets: {
    list: (brand: any, page: any) => ["rackets", "list", brand, { page }],
  },
});
