import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  additionalLinkTags: [
    {
      rel: "icon",
      href: "favicon.ico",
    },
  ],
  openGraph: {
    type: "website",
    url: process.env.NEXT_PUBLIC_URL,
    siteName: "모두의 배드민턴",
    title: "모두의 배드민턴",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/api/og`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default config;
