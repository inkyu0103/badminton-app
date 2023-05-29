/* eslint-disable @next/next/no-img-element */
import { RacketProps } from "interface/Racket.interface";
import Image from "next/image";
import Link from "next/link";
import { Rating } from "react-simple-star-rating";

const Racket = ({ name, racketId, score }: RacketProps) => (
  <Link href={`/rackets/yonex/${racketId}?page=1`}>
    <section className="my-2 md:my-0 border overflow-hidden flex w-full h-36  items-center md:w-[280px] md:h-auto md:block   duration-300 ease-out rounded-md cursor-pointer drop-shadow-sm hover:bg-slate-100">
      <div>
        <Image
          quality={80}
          width={280}
          height={280}
          className="rounded-md h-36 md:w-[280px] md:h-[280px]"
          alt="racket"
          src="https://staging-mobae-image.s3.ap-northeast-2.amazonaws.com/racket.jpg"
        />
      </div>
      <div className="h-full p-2">
        <p>{name}</p>
        <Rating
          size={20}
          initialValue={score}
          readonly
          allowFraction
          emptyStyle={{ display: "flex" }}
          fillStyle={{ display: "-webkit-inline-box" }}
        />
      </div>
    </section>
  </Link>
);

export default Racket;
