import { HeaderView, HeaderViewProps } from "components/common/Header";
import { LoginState } from "recoil/atoms/loginState";

export default {
  component: HeaderView,
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = (args: HeaderViewProps) => (
  <div className="flex flex-col p-0 gap-y-4">
    <HeaderView {...args} />
    <HeaderView {...args} />
    <HeaderView {...args} />
  </div>
);

Default.args = {
  handleLogout: () => {},
  loginUser: LoginState.LOGGED_IN,
};

Default.argTypes = {
  handleLogout: { table: { disable: true } },
  loginUser: { table: { disable: true } },
};
