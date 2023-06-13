import { HeaderView } from "components/common/Header";
import { LoginState } from "recoil/atoms/loginState";

export default {
  component: HeaderView,
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = () => (
  <div className="flex flex-col p-0 gap-y-4">
    <HeaderView handleLogout={() => {}} loginState={LoginState.LOGGED_IN} />
    <HeaderView handleLogout={() => {}} loginState={LoginState.NO_LOGIN} />
    <HeaderView handleLogout={() => {}} loginState={LoginState.PENDING} />
  </div>
);
