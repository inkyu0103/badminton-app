import EmailSend from "components/common/EmailSend";

export default {
  component: EmailSend,
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const Default = () => <EmailSend />;
