import Input from "components/forms/Input";

const SignupForms = () => (
  <div className="flex flex-col items-center justify-center gap-y-5">
    <h1 className="text-xl font-semibold">회원가입</h1>
    <form className="w-[328px] flex flex-col gap-2 ">
      <Input placeholder="이메일을 입력해주세요" type="email" isRequired />
      <button className="w-full h-8 bg-blue-300 rounded-md hover:cursor-pointer hover:text-white max-w-[328px] duration-300 ease-out hover:bg-blue-500 font-medium">
        인증 메일 전송
      </button>
    </form>
  </div>
);
export default SignupForms;
