import YoutubeVideo from "components/videos/YoutubeVideo";
import useClientWidth from "hooks/useClientWidth";
import { IYoutubeSearchItem } from "interface/Youtube.interface";
import { useBadmintonVideos } from "query/videos/videos";
import Slider from "react-slick";

const setSlideToShow = (clientWidth: number) => {
  if (clientWidth <= 656) {
    return 1;
  } else if (clientWidth < 992) {
    return 2;
  } else {
    return 3;
  }
};

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
  const clientWidth = useClientWidth();

  const sliderOptions = {
    arrows: false,
    slidesToShow: setSlideToShow(clientWidth),
    autoplay: true,
    autoplaySpeed: 2000,
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
