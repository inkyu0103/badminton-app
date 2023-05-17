import EmailVerify from "components/forms/EmailVerifyForms";
import { NextPage } from "next";
import Head from "next/head";

const Signup: NextPage = () => (
  <div className="flex items-center justify-center h-screen">
    <Head>
      <title>이메일 인증</title>
    </Head>
    <EmailVerify />
  </div>
);
export default Signup;
