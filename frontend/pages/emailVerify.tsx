import EmailVerify from "components/forms/EmailVerifyForms";
import seoConfig from "constants/seoConfig";
import { NextPage } from "next";
import { NextSeo } from "next-seo";

const Signup: NextPage = () => (
  <>
    <NextSeo
      title={seoConfig.emailVerify.title}
      description={seoConfig.emailVerify.description}
    />
    <EmailVerify />
  </>
);
export default Signup;
