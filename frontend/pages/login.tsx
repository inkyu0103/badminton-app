import LoginForms from "components/forms/LoginForms";
import { NextPage } from "next";
import Head from "next/head";
import { OnlyPublicRoute } from "utils/conditionalRoutes";

const Login: NextPage = () => (
  <div className="h-screen">
    <Head>
      <title>로그인</title>
    </Head>
    <LoginForms />
  </div>
);
export default OnlyPublicRoute(Login);
