import { IYoutubeSearchItem } from "interface/Youtube.interface";
import React from "react";

const videoBaseUrl = "https://www.youtube.com/watch?v=";

const YoutubeVideo = ({ snippet, id }: IYoutubeSearchItem): JSX.Element => {
  return (
    <div className="overflow-hidden transition-all border-2 rounded-lg w-80 hover:bg-slate-100 ">
      <a href={videoBaseUrl + id.videoId} target="_blank" rel="noreferrer">
        <div className="flex justify-center">
          <img
            width={320}
            height={180}
            className="object-cover"
            src={snippet.thumbnails.medium.url}
            alt="thumnail"
          />
        </div>
        <div className="pl-1">
          <p className="font-semibold">{snippet.title}</p>
          <p className="text-sm">{snippet.channelTitle}</p>
        </div>
      </a>
    </div>
  );
};
export default YoutubeVideo;
