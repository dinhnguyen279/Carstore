import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const navbar = [
  "Các dòng xe",
  "Mua trực tuyến",
  "Tư vấn mua xe",
  "Dịch vụ",
  "Thế giới Mercedes",
];

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);

  const showNavbar = () => {
    navRef.current?.classList.toggle("responsive-nav");
  };
  return (
    <div className="nav-main bg-[#66696b] relative">
      <div
        className="container m-auto flex justify-start text-center text-slate-200 text-lg"
        ref={navRef}
      >
        <button className="nav-btn px-4 py-0 rounded-sm" onClick={showNavbar}>
          <FontAwesomeIcon icon={faTimes} className=" text-2xl" />
        </button>
        {navbar.map((value, key) => {
          return (
            <>
              <a
                href="/"
                key={key + 1}
                className="p-6 hover:text-white hover:no-underline"
              >
                {value}
              </a>
            </>
          );
        })}
      </div>
      <button
        className="nav-btn btn-fabars rounded-sm flex lg:hidden"
        onClick={showNavbar}
      >
        <FontAwesomeIcon icon={faBars} className="text-2xl" />
      </button>
    </div>
  );
};
export default Navbar;
