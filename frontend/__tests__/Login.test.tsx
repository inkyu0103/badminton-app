import { GetServerSidePropsContext } from "next";
import { getServerSideProps } from "pages/login";

describe("로그인 페이지와 관련된 테스트를 수행합니다.", () => {
  it("header에 refresh token이 존재하는 경우 '/' 으로 돌아가는 객체를 return 합니다.", async () => {
    const context: Partial<GetServerSidePropsContext> = {
      req: {
        cookies: {
          refreshToken: "testRefreshToken",
        },
      },
    };
    const returnObj = await getServerSideProps(context);
    expect(returnObj).toEqual({
      redirect: {
        destination: "/",
        permanent: false,
      },
    });
  });
});
