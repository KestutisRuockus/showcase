import { useState } from "react";
import SquareAnimation from "../utils/SquareAnimation";
import links from "../data/navbarLinks.json";

const scrollToId = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.classList.add("scroll-mt-[100px]");
    element.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      element.classList.remove("scroll-mt-[100px]");
    }, 500);
  }
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  window.onscroll = function () {
    if (window.scrollY > 0) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  const handleLinkClick = (link) => {
    scrollToId(link.link);
    setOpen(false);
  };

  return (
    <nav
      className={`text-white flex justify-between gap-2 w-full px-[10%] py-4 bg-black sticky top-0 z-50 ${
        isScrolling ? "opacity-50" : "opacity-100"
      } transition-opacity duration-200 hover:opacity-100`}
    >
      <div className="flex items-center ms-2">
        <SquareAnimation />
        <h3 className="text-2xl ml-8 cursor-default font-bold max-[420px]:mr-12">
          Kęstutis Ruočkus
        </h3>
      </div>
      <div
        onClick={() => setOpen(!open)}
        className="text-3xl absolute sm:hidden right-5 z-40"
      >
        {open ? (
          <i className="fa-regular fa-rectangle-xmark text-white cursor-pointer text-2xl"></i>
        ) : (
          <i className="fa-solid fa-bars text-white cursor-pointer text-2xl"></i>
        )}
      </div>
      <ul
        className={`flex flex-col sm:flex-row justify-center gap-0 sm:gap-6 sm:items-center absolute sm:static sm:bg-transparent bg-black
         sm:text-white text-xl text-white sm:z-auto z-[30] left-0 w-1/2 max-[640px]:w-[100%] sm:h-auto h-[220px] sm:w-auto sm:pl-0 pl-6 
          transition-all duration-500 ease-in font-bold rounded-b-2xl ${
            open ? "top-0" : "top-[-490px]"
          }`}
      >
        {links.map((link) => (
          <li
            onClick={() => handleLinkClick(link)}
            className="duration-300 sm:hover:scale-125 cursor-pointer text-xl text-start pl-2 font-bold"
            key={link.name}
          >
            {link.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}
