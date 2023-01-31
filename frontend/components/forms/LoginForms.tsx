import Input from "components/forms/Input";

const LoginForms = () => {
  return (
    <form className="flex flex-col gap-2">
      <Input type="email" placeholder="이메일을 입력해주세요" />
      <Input type="password" placeholder="비밀번호를 입력해주세요" />
      <button onClick={()=>alert('로그인 버튼')}>로그인</button>
    </form>
  );
};
export default LoginForms;
