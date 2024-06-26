import Button from "../components/Button";
import { play_circle, youtube, google, facebook } from "../assets/icons";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative padding-y container hero w-full min-h-screen"
    >
      <div className="absolute top-1/2 sm:left-16 transform translate-y-[-50%]">
        <h2 className="sm:text-6xl text-3xl font-semibold font-inter leading-tight">
          Transform <br /> Your Body
        </h2>
        <p className="mt-4 mb-20 text-[#616161] max-w-[22rem]">
          We are dedicated to helping you transform your body and mind through
          the power of fitness.
        </p>
        <div className="flex sm:flex-row items-center flex-col gap-4">
          <Button label="Get Started" className="px-6 py-3 rounded-none w-60" />
          <Button
            label="Watch Reviews"
            icon={play_circle}
            className="px-4 py-3 w-60 rounded-none bg-clip-border bg-[#F66844] border-2 border-[#FF921B] bg-gradient-to-r from-black to-black"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 flex gap-8 px-4 py-2 bg-gradient-to-r from-[#F66844] to-[#FF921B]">
        <img src={google} alt="google icon" width={25} height={25} />
        <img src={facebook} alt="facebook icon" width={25} height={25} />
        <img src={youtube} alt="youtube icon" width={25} height={25} />
      </div>
    </section>
  );
}
