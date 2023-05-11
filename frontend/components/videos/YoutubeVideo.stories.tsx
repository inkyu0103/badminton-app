import YoutubeVideo from "components/videos/YoutubeVideo";
import { IYoutubeSearchItem } from "interface/Youtube.interface";

export default {
  component: YoutubeVideo,
};

export const Default = (args: IYoutubeSearchItem) => <YoutubeVideo {...args} />;

Default.args = {
  id: {
    videoId: "Q1XZ6zq6EO4",
  },
  snippet: {
    title: "테스트 배드민턴 영상",
    channelTitle: "테스트 배드민턴 채널",
    thumbnails: {
      medium: {
        url: "https://i.ytimg.com/vi/Q1XZ6zq6EO4/mqdefault_live.jpg",
      },
    },
  },
};

Default.argTypes = {
  id: { disable: { table: true } },
  kind: { disable: { table: true } },
  etag: { disable: { table: true } },
};
