import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import FitnessPlans from "./sections/FitnessPlans";
import Subscribe from "./sections/Subscribe";
import Trainer from "./sections/Trainer";
import WhyJoin from "./sections/WhyJoin";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FitnessPlans />
        <Subscribe />
        <Trainer />
        <WhyJoin />
      </main>
      <Footer />
    </>
  );
}
