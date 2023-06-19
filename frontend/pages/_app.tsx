import "styles/globals.css";
import "styles/slick.css";

import {
  dehydrate,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import CheckLogin from "components/common/CheckLogin";
import Layout from "components/common/Layout";
import usePrevRoute from "hooks/usePrevRoute";
import { AppContext, AppProps } from "next/app";
import { silentLogin } from "query/auth/login";
import { queryKeys } from "query/queryKeys";
import { useState } from "react";
import { RecoilRoot } from "recoil";

type MyAppProps = AppProps & { props: { dehydratedState: unknown } };

const MyApp = ({ Component, pageProps, props }: MyAppProps) => {
  const [queryClient] = useState(() => new QueryClient());
  usePrevRoute();

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={props.dehydratedState}>
        <RecoilRoot>
          <CheckLogin>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </CheckLogin>
        </RecoilRoot>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
};

MyApp.getInitialProps = async ({ ctx: { req } }: AppContext) => {
  const queryClient = new QueryClient();

  if (req === undefined) {
    return { props: { dehydratedState: dehydrate(queryClient) } };
  }

  await queryClient.fetchQuery({
    queryKey: queryKeys.auth.tokenState,
    queryFn: () => silentLogin(req.headers.cookie),
  });

  return { props: { dehydratedState: dehydrate(queryClient) } };
};

export default MyApp;
