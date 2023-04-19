import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { FormProvider, useForm } from "react-hook-form";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
    const methods = useForm();
    return (
      <FormProvider {...methods}>
        <QueryClientProvider client={new QueryClient()}>
          <RecoilRoot>
            <Story />
          </RecoilRoot>
        </QueryClientProvider>
      </FormProvider>
    );
  },
];
