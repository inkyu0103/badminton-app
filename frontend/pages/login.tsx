import LoginForms from "components/forms/LoginForms";
import { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";

const Login: NextPage = () => (
  <div className="h-screen">
    <Head>
      <title>로그인</title>
    </Head>
    <LoginForms />
  </div>
);
export default Login;

export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  if (req.cookies.refreshToken) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: {} };
};
