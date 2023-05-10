import "styles/globals.css";

import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import CheckLogin from "components/common/CheckLogin";
import Header from "components/common/Header";
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
          <>
            <Header />
            <Component {...pageProps} />
          </>
        </CheckLogin>
      </RecoilRoot>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default MyApp;
