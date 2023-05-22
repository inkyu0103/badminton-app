import axios from "query/axios";

const isUsableNickname = async (nickname: string) => {
  const { data } = await axios("users/usable-nickname", {
    params: {
      nickname,
    },
  }).catch(({ response }) => {
    if (response.status === 409) {
      return false;
    }
  });

  return data;
};

export default isUsableNickname;
