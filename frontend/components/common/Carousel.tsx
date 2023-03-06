import { Carousel } from "react-responsive-carousel";

const Carousels = () => (
  <div>
    <Carousel showThumbs={false}>
      <div className="w-[300px] h-[300px] bg-red-400">
        <img
          alt=""
          src="https://m.woosungsports.com/web/product/big/412_5ff22e3f894ac8106c2773bec3fbe12c.jpg"
        />
      </div>
      <div className="w-[300px] h-[300px] bg-blue-400">
        <img
          alt=""
          src="https://m.woosungsports.com/web/product/big/412_5ff22e3f894ac8106c2773bec3fbe12c.jpg"
        />
      </div>
      <div className="w-[300px] h-[300px] bg-green-400">
        <img
          alt=""
          src="https://m.woosungsports.com/web/product/big/412_5ff22e3f894ac8106c2773bec3fbe12c.jpg"
        />
      </div>
    </Carousel>
  </div>
);

export default Carousels;
