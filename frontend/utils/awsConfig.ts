import { Auth } from "aws-amplify";

export const setAwsConfigure = () =>
  Auth.configure({
    Auth: {
      region: "ap-northeast-2",
      userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID,
      userPoolWebClientId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID,
      oauth: {
        domain: "moabe-dev.auth.ap-northeast-2.amazoncognito.com",
        scope: ["openid"],
        redirectSignIn: "http://localhost:3000",
        redirectSignOut: "http://localhost:3000",
        responseType: "token",
      },
    },
  });
