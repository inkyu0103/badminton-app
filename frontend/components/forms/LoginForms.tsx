import Input from "./Input";

const LoginForms = () => {
  return (
    <form className="flex flex-col gap-1">
      <Input type="email" placeholder="이메일을 입력해주세요" />
      <Input type="password" placeholder="비밀번호를 입력해주세요" />
    </form>
  );
};
export default LoginForms;
