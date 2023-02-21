import Input from "components/forms/Input";

export default {
  component: Input,
};

export const Default = (args: { type: string }) => (
  <div className="container mx-auto">
    <Input {...args} />
  </div>
);

Default.args = {
  type: "text",
  placeholder: "입력해주세요",
};

Default.argTypes = {
  type: {
    options: ["text", "email", "password"],
    control: { type: "select" },
  },
};
