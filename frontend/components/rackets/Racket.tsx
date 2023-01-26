import { RacketProps } from "../../interface/Racket.interface";

const Racket = ({name}:RacketProps) => {
  return (
    <section className="hover:cursor-pointer">
      <div className="w-40 h-40 bg-red-100 rounded-md max-sm:w-32 max-sm:h-32">
        <img alt="racket"  src="https://m.woosungsports.com/web/product/big/412_5ff22e3f894ac8106c2773bec3fbe12c.jpg"/>
      </div>
      <p>{name}</p>
    </section>
  );
};
export default Racket;
