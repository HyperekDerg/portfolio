import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = ({ setActive, active }) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    var activePage = document.location.hash.replace("#", "");
    const capitalized =
      activePage.charAt(0).toUpperCase() + activePage.slice(1);
    setActive(capitalized);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 ${styles.gradientNavbar}`}
    >
      <div className="w-full flex justify-between items-center max-w-10xl mx-auto">
        <Link
          to="./"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-16 h-16 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer border-white border-l-4 rounded-sm uppercase">
            &nbsp; Hyper{" "}
            <span className="sm:block hidden">&nbsp; Energy Dragon</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <div key={`wrapper-${link.id}`}>
              <li
                key={link.id}
                className={`text-white hover:text-emerald-200 text-[20px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
              <div
                key={`style-${link.id}`}
                className={`${
                  active === link.title ? "bg-emerald-300" : "bg-[#374151]"
                }
                w-6 h-9 rotate-45 absolute -top-3.5 ml-4`}
              />
            </div>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"} p-6 ${
              styles.gradientNavbar
            } absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-[#FFBE79]" : "text-white"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
