import type { NextPage } from "next";
import Racket from "components/rackets/Racket";
import Header from "components/common/Header";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [t, setT] = useState(null);

  useEffect(() => {
    console.log("히히");
    fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setT(data);
      });
  }, []);

  return (
    <div>
      <Header />
      <div>{t?.result}</div>
      <div className="mx-auto my-10 max-w-[1200px] flex flex-wrap">
        {data.map((name, idx) => (
          <Racket key={idx} name={name} />
        ))}
      </div>
    </div>
  );
};

export default Home;

const data = Array(11).fill("Yonex nanoray");
