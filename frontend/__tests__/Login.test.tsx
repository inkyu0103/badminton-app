import { render } from "@testing-library/react";
import { useRouter } from "next/router";
import Login from "pages/login";
import { RecoilRoot } from "recoil";
import { userState } from "recoil/atoms/user";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("@tanstack/react-query", () => ({
  useMutation: () => ({
    mutate: jest.fn(),
  }),
  QueryClientProvider: jest.fn(),
}));

describe("로그인 페이지 접근 가능 여부를 테스트 합니다.", () => {
  it("로그인 되지 않은 경우, 접근 가능합니다.", () => {
    render(
      <RecoilRoot initializeState={({ set }) => set(userState, null)}>
        <Login />
      </RecoilRoot>,
    );
  });

  it("로그인 된 경우, 접근이 불가능합니다.", () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
    });

    render(
      <RecoilRoot
        initializeState={({ set }) =>
          set(userState, { email: "test@test.com", id: 1 })
        }
      >
        <Login />
      </RecoilRoot>,
    );

    expect(useRouter().push).toBeCalledWith("/");
  });
});
