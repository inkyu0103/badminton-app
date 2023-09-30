import BeginnerGuide from "components/common/BeginnerGuide";
import { NextPage } from "next";
import Head from "next/head";

const BeginnerPage: NextPage = () => (
  <>
    <Head>
      <title>초보자 장비 가이드 | 모두의 배드민턴</title>
    </Head>
    <BeginnerGuide />
  </>
);
export default BeginnerPage;
