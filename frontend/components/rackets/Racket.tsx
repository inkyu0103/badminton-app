import { RacketProps } from "interface/Racket.interface";

const Racket = ({ name }: RacketProps) => (
  <section className="flex items-center w-full h-32 p-2 mt-1 duration-300 ease-out rounded-md cursor-pointer drop-shadow-sm hover:bg-slate-100 gap-x-2 gap sm:w-[300px] sm:h-[300px] sm:block">
    <div className="justify-center sm:flex">
      <img
        className="rounded-md w-28 h-28 sm:w-64 sm:h-64"
        alt="racket"
        src="https://m.woosungsports.com/web/product/big/412_5ff22e3f894ac8106c2773bec3fbe12c.jpg"
      />
    </div>
    <div className="h-full sm:h-auto">
      <p>{name}</p>
    </div>
  </section>
);

export default Racket;
