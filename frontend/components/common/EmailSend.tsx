import emailSend from "assets/lottie/emailSend.json";
import Lottie from "lottie-react";

const EmailSend = () => (
  <div className=" w-mb  ">
    <Lottie animationData={emailSend} loop={false} />
    <div className="flex flex-col items-center">
      <p className="text-2xl font-bold">이메일이 전송되었습니다!</p>
    </div>
  </div>
);
export default EmailSend;
