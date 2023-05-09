import { useMutation } from "@tanstack/react-query";
import axios from "query/axios";

const sendVerifyEmail = async (email: string) => {
  const { data } = await axios.post("/auth/verify-email", {
    email,
  });
  return data;
};

export const useSendVerifyEmailMutation = () =>
  useMutation((email: string) => sendVerifyEmail(email), {
    onError: () => {
      alert("문제가 발생하였습니다.");
    },
  });
