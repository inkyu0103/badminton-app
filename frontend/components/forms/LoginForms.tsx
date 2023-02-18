import Input from "components/forms/Input";

const LoginForms = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-full ">
      <div>로고</div>
      <form
        className="w-[328px] flex flex-col gap-2 "
        onSubmit={(e) => e.preventDefault()}
      >
        <Input type="email" placeholder="이메일을 입력해주세요" isRequired />
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          isRequired
        />
        <button className="w-full h-8 bg-blue-300 rounded-md hover:cursor-pointer hover:text-white max-w-[328px] duration-300 ease-out hover:bg-blue-500">
          로그인
        </button>
        <button className="w-full h-8 bg-blue-100 rounded-md hover:cursor-pointer hover:text-white max-w-[328px] duration-300 ease-out hover:bg-blue-300">
          회원가입
        </button>
      </form>
    </div>
  );
};
export default LoginForms;
