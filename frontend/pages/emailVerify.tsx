import EmailVerify from "components/forms/EmailVerifyForms";
import { NextPage } from "next";

const Signup: NextPage = () => (
  <div className="flex items-center justify-center h-screen">
    <EmailVerify />
  </div>
);
export default Signup;
