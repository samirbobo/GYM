import { whyJoin, whyJoin2 } from "../assets/images";
import Button from "../components/Button";

export default function WhyJoin() {
  return (
    <section className="container padding-y">
      <h2 className="heading">
        Why Join With <span className="text-[#FF921B]">Us?</span>
      </h2>
      <article className="mt-16 lg:pl-24">
        <div className="relative bg-[#0e0e0e] p-4 pl-12 pr-8 lg:max-w-xl rounded-md">
          <ul>
            <li className="ballet-list py-2 pl-3 text-lg font-semibold leading-normal">
              Best Gym
            </li>
            <li className="ballet-list py-2 pl-3 text-lg font-semibold leading-normal">
              Experts Coach
            </li>
            <li className="ballet-list py-2 pl-3 text-lg font-semibold leading-normal">
              Good Workout Facilities
            </li>
            <li className="ballet-list py-2 pl-3 text-lg font-semibold leading-normal">
              Consultation With Experts
            </li>
          </ul>
          <img
            src={whyJoin}
            alt="why Join1"
            width={180}
            height={215}
            className="lg:absolute max-lg:hidden -right-[16rem] -bottom-[11.5rem]"
          />
          <img
            src={whyJoin2}
            alt="why Join2"
            width={180}
            height={215}
            className="lg:absolute max-lg:hidden -right-[13rem] -top-[5rem] "
          />
        </div>
        <Button
          label="See More Benefits"
          className="rounded-none lg:mt-16 mt-12 mb-2 px-6"
        />
      </article>
    </section>
  );
}
