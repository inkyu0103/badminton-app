import {
  SignupFormsView,
  SignupFormViewProps,
} from "components/forms/SignupForms";

export default {
  component: SignupFormsView,
};

export const Default = (args: SignupFormViewProps) => (
  <SignupFormsView {...args} />
);

Default.args = {
  email: "mobae@test.com",
  handleSignup: () => {},
  handleValidateNickname: () => {},
};

Default.argTypes = {
  handleSignup: { table: { disable: true } },
};
