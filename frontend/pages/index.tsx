import type { NextPage } from "next";
import Racket from "components/rackets/Racket";
import { Fragment } from "react";
import Header from "components/common/Header";

const Home: NextPage = () => (
  <Fragment>
    <Header />
    <div className="container flex flex-wrap gap-3 ">
      {data.map((name, idx) => (
        <Racket key={idx} name={name} />
      ))}
    </div>
  </Fragment>
);

export default Home;

const data = Array(10).fill("Yonex nanoray");
