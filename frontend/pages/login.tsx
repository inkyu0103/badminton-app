import LoginForms from "components/forms/LoginForms";
import { NextPage } from "next";
import { OnlyPublicRoute } from "utils/conditionalRoutes";

const Login: NextPage = () => (
  <div className="h-screen">
    <LoginForms />
  </div>
);
export default OnlyPublicRoute(Login);
