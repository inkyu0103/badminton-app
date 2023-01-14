import Input from "./Input";

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
};

Default.argTypes = {
  type: {
    options: ["text", "email", "password"],
    control: { type: "select" },
  },
};
