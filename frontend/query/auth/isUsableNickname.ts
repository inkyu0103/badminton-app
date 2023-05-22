import axios from "query/axios";

const isUsableNickname = async (nickname: string) => {
  const { data } = await axios("users/usable-nickname", {
    params: {
      nickname,
    },
  });
  return data;
};

export default isUsableNickname;
