import "styles/globals.css";
import "styles/slick.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "components/common/Layout";
import usePrevRoute from "hooks/usePrevRoute";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import SEO from "next-seo.config";
import { useState } from "react";
import { RecoilRoot } from "recoil";
import { setAwsConfigure } from "utils/awsConfig";

type MyAppProps = AppProps & { props: { dehydratedState: unknown } };

setAwsConfigure();

const MyApp = ({ Component, pageProps: { ...pageProps } }: MyAppProps) => {
  const [queryClient] = useState(() => new QueryClient());
  usePrevRoute();

  return (
    <QueryClientProvider client={queryClient}>
      {/* <AccessTokenInject /> */}
      <RecoilRoot>
        <Layout>
          <DefaultSeo {...SEO} />

          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default MyApp;
