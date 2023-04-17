import { RacketProps } from "interface/Racket.interface";
import Link from "next/link";

const Racket = ({ name, racketId }: RacketProps) => (
  <Link href={`/rackets/yonex/${racketId}?page=1`}>
    <section className="flex items-center w-full h-32 p-2 mt-1 duration-300 ease-out rounded-md cursor-pointer drop-shadow-sm hover:bg-slate-100 gap-x-2 gap md:w-[300px] md:h-[300px] md:block">
      <div className="justify-center md:flex">
        <img
          className="rounded-md w-28 h-28 md:w-64 md:h-64"
          alt="racket"
          src="https://m.woosungsports.com/web/product/big/412_5ff22e3f894ac8106c2773bec3fbe12c.jpg"
        />
      </div>
      <div className="h-full md:h-auto">
        <p>{name}</p>
      </div>
    </section>
  </Link>
);

export default Racket;
