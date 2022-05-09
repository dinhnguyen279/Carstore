import React, {useState} from 'react';
import {Navigator} from "./Navigator" ;


const Navbar = ()=> {
    
    const [navbar, setnavbar] = useState([
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

    ]);

return (
    <nav className="bg-[#66696b]">
        <ul className="flex justify-between flex-wrap px-[10rem] text-zinc-50 ">
            {navbar.map((value, key)=>{
                return <Navigator key={key} text={value} />;
            })}
        </ul>
    </nav>
    );
};
export default Navbar;