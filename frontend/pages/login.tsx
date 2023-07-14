import LoginForms from "components/forms/LoginForms";
import seoConfig from "constants/seoConfig";
import { GetServerSidePropsContext, NextPage } from "next";
import { NextSeo } from "next-seo";

const Login: NextPage = () => (
  <>
    <NextSeo
      title={seoConfig.login.title}
      description={seoConfig.login.description}
    />
    <LoginForms />
  </>
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
