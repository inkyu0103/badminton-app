import { HeaderView } from "components/common/Header";

export default {
  component: HeaderView,
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = (args: any) => (
  <div className="p-0">
    <HeaderView {...args} />
  </div>
);

Default.args = {
  handleLogout: () => {},
  loginUser: true,
};

Default.argTypes = {
  handleLogout: { table: { disable: true } },
  loginUser: { control: "boolean" },
};
