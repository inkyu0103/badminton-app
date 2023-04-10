import "styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Header from "components/common/Header";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import CheckLogin from "components/common/CheckLogin";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ErrorBoundary } from "react-error-boundary";
import { S3 } from "@aws-sdk/client-s3";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <CheckLogin>
          <>
            <Header />
            <ErrorBoundary fallback={<div>정말 되는거니</div>}>
              <Component {...pageProps} />
            </ErrorBoundary>
          </>
        </CheckLogin>
      </RecoilRoot>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
