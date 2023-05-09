import { Html, Main, NextScript, Head } from "next/document";

const Document = () => (
  <Html>
    <Head>
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
    </Head>
    <body>
      <Main />
      <div id="modal-root" />
      <NextScript />
    </body>
  </Html>
);

export default Document;
