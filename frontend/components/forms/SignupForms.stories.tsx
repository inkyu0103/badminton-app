import { SignupFormsView } from "components/forms/SignupForms";

export default {
  component: SignupFormsView,
};

export const Default = (args) => <SignupFormsView {...args} />;

Default.args = {
  email: "mobae@test.com",
};
