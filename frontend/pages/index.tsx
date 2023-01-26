import type { NextPage } from "next";
import Racket from "components/rackets/Racket";
import { Fragment } from "react";
import Header from "components/common/Header";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Header />
      <div className="container flex flex-wrap justify-between">
        <Racket />
      </div>
    </Fragment>
  );
};

export default Home;
