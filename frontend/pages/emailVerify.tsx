import EmailVerify from "components/forms/EmailVerifyForms";
import seoConfig from "constants/seoConfig";
import { NextPage } from "next";
import { NextSeo } from "next-seo";

const Signup: NextPage = () => (
  <div className="flex items-center justify-center h-screen">
    <NextSeo
      title={seoConfig.emailVerify.title}
      description={seoConfig.emailVerify.description}
    />
    <EmailVerify />
  </div>
);
export default Signup;
