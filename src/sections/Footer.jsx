import { left, right, copyright } from "../assets/icons";
import Button from "../components/Button";
import { footerLinks } from "../constants/index";

export default function Footer() {
  return (
    <footer id="contact" className="padding-t bg-[#121212]">
      <div className="container flex justify-between flex-wrap gap-x-12 xl:gap-x-4 gap-y-12">
        <div>
          <a href="/" className="flex items-start gap-4">
            <img src={left} alt="Left Icon " width={30} height={30} />
            <h1 className="text-center -mt-2 font-inter text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#F66844] to-[#FF921B]">
              Bodyshape <br />
              <span className="text-[12px]">Unleash your inner athlete</span>
            </h1>
            <img src={right} alt="Right Icon " width={30} height={30} />
          </a>
          <p className="text-xl font-inter font-semibold max-w-56 mx-auto mt-4 leading-normal">
            Support Your Need To Much Fitness Goal
          </p>
        </div>

        {footerLinks.map((ele) => (
          <div key={ele.header}>
            <h3 className="heading text-lg mb-4">{ele.header}</h3>
            <ul
              className={`text-[#606060] ${
                ele.header === "Popular Tags"
                  ? "flex items-center gap-x-2 flex-wrap max-w-[280px]"
                  : ""
              }`}
            >
              {ele.links.map((link) => (
                <li key={link.href} className="py-2">
                  {ele.header === "Popular Tags" ? (
                    link.label === "Facilities" ? (
                      <Button
                        label={link.label}
                        className="rounded-none text-white"
                      />
                    ) : (
                      <Button
                        label={link.label}
                        className="rounded-none bg-[#888888] bg-none text-white"
                      />
                    )
                  ) : (
                    <a href={link.href}>{link.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="p-4 bg-[#FF921B] mt-24 flex justify-center items-center gap-4">
        <img src={copyright} alt="copyright" width={30} height={30} />
        <p className="text-lg font-inter font-semibold">
          2024 All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
