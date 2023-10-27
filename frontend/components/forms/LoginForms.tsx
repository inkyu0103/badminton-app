import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
import { Auth } from "aws-amplify";

const LoginForms = () => {
  // const { register, handleSubmit } = useForm();
  // const { mutate: loginMutate } = useLoginMutation();

  return (
    <div className="flex flex-col items-center justify-center p-5 h-full gap-2">
      <p className="text-3xl font-bold ">모두의 배드민턴 🏸</p>
      <form className="flex flex-col gap-2 w-full max-w-3xl">
        {/* <Input
          type="email"
          placeholder="이메일을 입력해주세요"
          {...register("email", { required: true })}
        />
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          minLength={8}
          {...register("password", { required: true })}
        />
        <button
          type="submit"
          className="w-full h-14 duration-300 ease-out bg-blue-300 rounded-xl hover:cursor-pointer hover:text-white  hover:bg-blue-500"
        >
          로그인
        </button>

        <Link
          className="flex items-center justify-center w-full h-14  duration-300 ease-out bg-blue-100 rounded-xl hover:cursor-pointer hover:text-white  hover:bg-blue-300"
          href="/emailVerify"
        >
          회원가입
        </Link>
         */}

        <button
          type="button"
          className="flex justify-center items-center bg-[#FEE500] rounded-xl h-14 px-5"
          onClick={async () =>
            await Auth.federatedSignIn({
              customProvider: "kakao",
            })
          }
        >
          <span>카카오 로그인</span>
        </button>
        <button
          className="flex justify-center items-center bg-[#FEE500] rounded-xl h-14 px-5"
          onClick={async () =>
            await Auth.federatedSignIn({
              provider: CognitoHostedUIIdentityProvider.Google,
            })
          }
        >
          <span>구글 로그인</span>
        </button>
      </form>
    </div>
  );
};
export default LoginForms;
