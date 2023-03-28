import EmailSend from "components/common/EmailSend";
import Input from "components/forms/Input";
import { useSendVerifyEmailMutation } from "query/auth/sendVerifyEmail";
import { useState } from "react";

const EmailVerifyForms = () => {
  const { mutate, isSuccess, isLoading } = useSendVerifyEmailMutation();
  const handleSubmitEmail = (email: string) => mutate(email);

  if (isSuccess) {
    return <EmailSend />;
  }

  return (
    <EmailVerfyFormsView
      handleSubmitEmail={handleSubmitEmail}
      isLoading={isLoading}
    />
  );
};
export default EmailVerifyForms;

export const EmailVerfyFormsView = ({ handleSubmitEmail, isLoading }) => {
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col items-center justify-center gap-y-5">
      <h1 className="text-xl font-semibold">회원가입</h1>
      <form
        className="w-[328px] flex flex-col gap-2 "
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmitEmail(email);
        }}
      >
        <Input
          placeholder="이메일을 입력해주세요"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          className="w-full h-8 bg-blue-300 rounded-md hover:cursor-pointer hover:text-white max-w-[328px] duration-300 ease-out hover:bg-blue-500 font-medium disabled:pointer-events-none disabled:bg-slate-300 "
          disabled={isLoading}
        >
          인증 메일 전송
        </button>
      </form>
    </div>
  );
};
