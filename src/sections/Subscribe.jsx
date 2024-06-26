import SubscribeCard from "../components/SubscribeCard";

export default function Subscribe() {
  return (
    <section className="container padding-y">
      <h2 className="heading">
        Subscribe To <span className="text-[#FF921B]">Plans</span>
      </h2>
      <article className="grid gap-16 lg:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 mt-24 max-sm:justify-center">
        <SubscribeCard price={1200} />
        <SubscribeCard
          className="lg:transform lg:-translate-y-8"
          price={1000}
        />
        <SubscribeCard price={1500} />
      </article>
    </section>
  );
}
