import YoutubeVideo from "components/videos/YoutubeVideo";
import { IYoutubeSearchItem } from "interface/Youtube.interface";
import { useBadmintonVideos } from "query/videos/videos";
import Slider from "react-slick";

const YoutubeVideoList = () => {
  const { data: videoList } = useBadmintonVideos();

  return <YoutubeVideoListView videoList={videoList} />;
};

export default YoutubeVideoList;

export const YoutubeVideoListView = ({
  videoList,
}: {
  videoList: IYoutubeSearchItem[] | undefined;
}) => {
  const sliderOptions = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
  };

  return (
    <section>
      <p className="text-2xl font-bold">배드민턴 Youtube List</p>
      <Slider {...sliderOptions}>
        {videoList?.map((video) => (
          <YoutubeVideo key={video.id.videoId} {...video} />
        ))}
      </Slider>
    </section>
  );
};
