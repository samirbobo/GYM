import Button from "./Button";

export default function SubscribeCard({ className, price }) {
  return (
    <div
      className={`relative bg-[#0e0e0e] m-auto sm:w-[280px] max-sm:w-[280px] py-8 rounded-lg text-center ${
        className ? className : ""
      }`}
    >
      <h3 className="heading text-xl">Fit</h3>
      <p className="text-[#606060] my-4">Plan Exp. 16/11/2024</p>
      <p className="text-xl">
        ₹{price} /<span className="text-[#606060] text-sm">Month</span>
      </p>
      <p className="text-[#606060] my-4">Streaming</p>
      <Button
        label="Select Plan"
        className="px-4 py-2 w-52 rounded-none bg-clip-border bg-[#0e0e0e] bg-none border-2 border-[#FF921B] hover:bg-[#FF921B] transition-all duration-300"
      />
      {className && (
        <div className="absolute bg-white text-black text-lg leading-normal rounded-xl px-4 py-2 -top-6 left-1/2 -translate-x-1/2">
          Recommended
        </div>
      )}
    </div>
  );
}
