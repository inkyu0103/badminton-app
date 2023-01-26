import Header from "components/common/Header";

export default {
  title: "common/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = () => {
  return (
    <div className="p-0">
      <Header />
    </div>
  );
};
