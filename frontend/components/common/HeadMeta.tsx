import Head from "next/head";

interface HeadMetaProps {
  title?: string;
  description?: string;
  url?: string;
}

const HeadMeta = ({ title, description, url }: HeadMetaProps) => {
  return (
    <Head>
      <title>{title || "모두의 배드민턴"}</title>
      <meta
        name="description"
        content={
          description || "모두가 배드민턴을 즐길 수 있도록 도와주는 플랫폼"
        }
      />
      <meta property="og:title" content={title || "모두의 배드민턴"} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || "http://localhost:3000"} />
    </Head>
  );
};
export default HeadMeta;
