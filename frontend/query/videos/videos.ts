import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import {
  IYoutubeSearchItem,
  IYoutubeSearchResponse,
} from "interface/Youtube.interface";
import { queryKeys } from "query/queryKeys";

const getBadmintonVideos = async () => {
  const { data } = await axios.get(
    "https://www.googleapis.com/youtube/v3/search",
    {
      params: {
        part: "snippet",
        q: "배드민턴",
        key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
        maxResults: 10,
      },
    },
  );
  return data;
};

export const useBadmintonVideos = () => {
  return useQuery<IYoutubeSearchResponse, AxiosError, IYoutubeSearchItem[]>(
    queryKeys.videos.all,
    getBadmintonVideos,
    {
      select: (data) => {
        return data.items;
      },
    },
  );
};
