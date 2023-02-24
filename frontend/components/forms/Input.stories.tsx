import Input from "components/forms/Input";
import { InputProps } from "interface/Input.interface";

export default {
  component: Input,
};

export const Default = (args: InputProps) => (
  <div className="container mx-auto">
    <Input {...args} />
  </div>
);

Default.args = {
  type: "text",
  placeholder: "입력해주세요",
  disabled: false,
};

Default.argTypes = {
  type: {
    options: ["text", "email", "password"],
    control: { type: "select" },
  },
};
