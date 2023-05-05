import EmailSend from "components/common/EmailSend";

export default {
  component: EmailSend,
  parameters: {
    chromatic: { disableSnapshot: false },
  },
};

export const Default = () => <EmailSend />;
