import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  title: "모두의 배드민턴",
  description: "모든 사람이 배드민턴을 즐기는 그 날을 위해",
  canonical: process.env.NEXT_PUBLIC_URL,
  openGraph: {
    type: "website",
    url: process.env.NEXT_PUBLIC_URL,
    siteName: "모두의 배드민턴",
    title: "모두의 배드민턴",
    description: "모든 사람이 배드민턴을 즐기는 그 날을 위해",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/api/og`,
        width: 1200,
        height: 630,
      },
    ],
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "favicon.ico",
    },
  ],
};

export default config;
