export default function Button({ label, icon, className }) {
  return (
    <button
      className={`${
        className ? className : ""
      } text-lg font-inter leading-normal px-2 py-1 rounded-lg bg-gradient-to-r from-[#F66844] to-[#FF921B]
      ${icon ? "flex items-center gap-2" : ""} `}
    >
      {icon && <img src={icon} alt="icon" width={24} height={24} />}

      {label}
    </button>
  );
}
