import { navLinks } from "../constants/index";
import { left, right } from "../assets/icons";
import Button from "./Button.jsx";
import HamburgerIcon from "./HamburgerIcon.jsx";
import { useState } from "react";

export default function Navbar() {
  const [navToggle, setNavToggle] = useState(false);

  const handleNavToggle = () => {
    setNavToggle(!navToggle);
  };
  return (
    <header className="container py-8 absolute z-10 left-0 right-0">
      <nav className="relative flex justify-between items-start">
        <a href="/" className="flex items-start gap-4">
          <img src={left} alt="Left Icon " width={30} height={30} />
          <h1 className="text-center -mt-2 font-inter text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#F66844] to-[#FF921B]">
            Bodyshape <br />
            <span className="text-[12px]">Unleash your inner athlete</span>
          </h1>
          <img src={right} alt="Right Icon " width={30} height={30} />
        </a>

        <ul className={`nav-links ${navToggle ? "max-md:p-4 h-auto" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                className="font-inter leading-normal max-md:text-black max-md:hover:pl-1 md:hover:shadow-[0_2px_0_#FF921B] pb-1 transition-all duration-200 text-lg"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
          <Button label="Join Us" className="max-md:hidden" />
        </ul>

        <div
          className="cursor-pointer md:hidden mt-2"
          onClick={handleNavToggle}
        >
          <HamburgerIcon />
        </div>
      </nav>
    </header>
  );
}
