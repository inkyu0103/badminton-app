import type { NextPage } from "next";
import Racket from "components/rackets/Racket";
import Header from "components/common/Header";

const Home: NextPage = () => (
  <div>
    <Header />
    <div className="mx-auto my-10 max-w-[1200px] flex flex-wrap">
      {data.map((name, idx) => (
        <Racket key={idx} name={name} />
      ))}
    </div>
  </div>
);

export default Home;

const data = Array(11).fill("Yonex nanoray");
