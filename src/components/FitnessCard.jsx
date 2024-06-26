export default function FitnessCard({ icon, name, desc, index }) {
  return (
    <article
      className={`flex flex-col items-center ${
        index < 2 ? "xl:border-r-2  xl:border-b-2" : ""
      } ${index === 2 ? "xl:border-b-2" : ""} ${
        index === 5 ? "" : index > 2 ? "xl:border-r-2" : ""
      } p-8 border-[#FF921B]`}
    >
      <img src={icon} alt="icon" width={60} height={60} />
      <h3 className="text-xl font-bold font-inter my-8">{name}</h3>
      <p className="text-sm text-center text-[#606060] max-w-80 leading-normal">
        {desc}
      </p>
    </article>
  );
}
