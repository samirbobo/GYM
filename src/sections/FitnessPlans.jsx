import FitnessCard from "../components/FitnessCard";
import { fitnessOptions } from "../constants";

export default function FitnessPlans() {
  return (
    <section id="services" className="container padding-y hero2 min-h-screen">
      <h2 className="heading">
        Fitness Plans & <span className="text-[#FF921B]">Nutrition</span>
        <div className="flex justify-center flex-wrap mt-16">
          {fitnessOptions.map((fit, index) => (
            <FitnessCard key={fit.name} {...fit} index={index} />
          ))}
        </div>
      </h2>
    </section>
  );
}
