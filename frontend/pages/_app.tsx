import "styles/globals.css";
import "styles/slick.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import CheckLogin from "components/common/CheckLogin";
import Layout from "components/common/Layout";
import usePrevRoute from "hooks/usePrevRoute";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  usePrevRoute();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <CheckLogin>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CheckLogin>
      </RecoilRoot>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default MyApp;
