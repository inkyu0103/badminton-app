import type { NextPage } from "next";
import Racket from "components/rackets/Racket";

const Home: NextPage = () => {
  return (
    <div className="container flex flex-wrap justify-between">
      <Racket />
    </div>
  );
};

export default Home;
