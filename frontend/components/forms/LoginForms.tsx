import { useForm } from "react-hook-form";
import Input from "components/forms/Input";
import Link from "next/link";
import { useLoginMutation } from "query/auth/login";

const LoginForms = () => {
  const { register, handleSubmit } = useForm();
  const { mutate: loginMutate } = useLoginMutation();

  return (
    <div className="flex flex-col items-center justify-center w-screen h-full gap-2">
      <p className="text-3xl font-bold ">모두의 배드민턴 🏸</p>
      <form
        className="flex flex-col gap-2 w-mb "
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit((data) =>
            loginMutate({ email: data.email, password: data.password }),
          )();
        }}
      >
        <Input
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
          className="w-full h-8 duration-300 ease-out bg-blue-300 rounded-md hover:cursor-pointer hover:text-white max-w-mb hover:bg-blue-500"
        >
          로그인
        </button>

        <Link
          className="flex items-center justify-center w-full h-8 duration-300 ease-out bg-blue-100 rounded-md hover:cursor-pointer hover:text-white max-w-mb hover:bg-blue-300"
          href="/emailVerify"
        >
          회원가입
        </Link>
      </form>
    </div>
  );
};
export default LoginForms;
