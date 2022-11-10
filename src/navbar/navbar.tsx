// import React, {useState} from 'react';
import { Navigator } from "./Navigator";

const navbar = [
  " HOME",
  " SALE",
  " HANDBAGS",
  " WALLETS",
  " ACCESSORIES",
  " MAIN STORE",
  " SHOES",
  " VINTAGE",
  " SERVICES",
  " CONTACT US",
];
const Navbar = () => {
  return (
    <nav className="bg-[#66696b] absolute top-15 left-0 right-0">
      <ul className=" flex justify-between flex-wrap text-zinc-50 container mx-auto px-5 py-2 overflow-hidden ">
        {navbar.map((value, key) => {
          return <Navigator text={value} key={key} />;
        })}
      </ul>
    </nav>
  );
};
export default Navbar;
