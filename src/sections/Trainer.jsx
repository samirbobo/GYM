import { trainer1, whyJoin, whyJoin2 } from "../assets/images";

export default function Trainer() {
  return (
    <section id="about" className="container padding-y">
      <h2 className="heading">
        Join Out <span className="text-[#FF921B]">Trainer</span>
      </h2>
      <article className="grid gap-16 lg:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 mt-24 max-sm:justify-center">
        <img
          src={trainer1}
          alt="trainer1"
          width={280}
          height={342}
          className="m-auto"
        />
        <img
          src={whyJoin2}
          alt="trainer1"
          width={280}
          height={340}
          className="m-auto"
        />
        <img
          src={whyJoin}
          alt="trainer1"
          width={280}
          height={342}
          className="m-auto"
        />
      </article>
    </section>
  );
}
