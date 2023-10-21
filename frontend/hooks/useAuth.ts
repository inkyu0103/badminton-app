import { CognitoUser } from "@aws-amplify/auth";
import { Auth } from "aws-amplify";
import { useEffect, useState } from "react";

export type TAuthState = "loading" | "authenticated" | "unauthenticated";

export const useAuth = () => {
  const [authState, setAuthState] = useState<TAuthState>("loading");

  useEffect(() => {
    (async () => {
      const user: CognitoUser | null = await Auth.currentAuthenticatedUser();
      const token = user
        ?.getSignInUserSession()
        ?.getAccessToken()
        .getJwtToken();

      if (token) {
        setAuthState("authenticated");
      } else {
        setAuthState("unauthenticated");
      }
    })();
  }, [authState]);

  return authState;
};
