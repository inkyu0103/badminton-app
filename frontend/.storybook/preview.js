import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

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
  (Story) => (
    <QueryClientProvider client={new QueryClient()}>
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    </QueryClientProvider>
  ),
];
