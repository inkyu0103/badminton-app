import { HeaderView } from "components/common/Header";

export default {
  component: HeaderView,
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = () => (
  <div className="flex flex-col p-0 gap-y-4">
    <HeaderView handleLogout={() => {}} />
    <HeaderView handleLogout={() => {}} isLogin />
  </div>
);
