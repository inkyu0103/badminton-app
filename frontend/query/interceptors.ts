import { CognitoUser } from "@aws-amplify/auth";
import { Auth } from "aws-amplify";
import axios from "query/axios";

export const setBearerToken = (token: string) => {
  axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};

export const removeBearerToken = () => {
  axios.interceptors.request.clear();
};

axios.interceptors.request.use(async (config) => {
  const user: CognitoUser | null = await Auth.currentAuthenticatedUser();
  const token = user?.getSignInUserSession()?.getAccessToken().getJwtToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
