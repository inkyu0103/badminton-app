import { RacketProps } from "interface/Racket.interface";

const Racket = ({ name }: RacketProps) => (
  <section className=" p-2 rounded-md shadow-lg hover:cursor-pointer  [&>div>img]:hover:scale-125 hover:bg-slate-50 ease-in duration-100 ">
    <div className="w-40 h-40 overflow-hidden bg-red-100 max-sm:w-32 max-sm:h-32">
      <img
        className="overflow-hidden duration-100 ease-in"
        alt="racket"
        src="https://m.woosungsports.com/web/product/big/412_5ff22e3f894ac8106c2773bec3fbe12c.jpg"
      />
    </div>
    <p>{name}</p>
  </section>
);

export default Racket;
