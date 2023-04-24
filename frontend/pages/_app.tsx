import "styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Header from "components/common/Header";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import CheckLogin from "components/common/CheckLogin";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import usePrevRoute from "hooks/usePrevRoute";

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
