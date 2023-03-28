import { useMutation } from "@tanstack/react-query";
import { CreateUser } from "interface/User.interface";
import { useRouter } from "next/router";
import axios from "query/axios";

const signup = async (user: CreateUser) => {
  const { data } = await axios.post("/auth/signup", {
    ...user,
  });
  return data;
};

const useSignupMutation = () => {
  const router = useRouter();
  return useMutation((user: CreateUser) => signup(user), {
    onSuccess: () => router.push("/login"),
  });
};

export default useSignupMutation;
