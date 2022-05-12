// import { useState } from "react";

const Wapper = () => {
    const Images =
        
    [
        {
            img: "./images/mecrEQS.png",
            name: "EQS"
        },
        {
            img: "./images/AclassAMG.png",
            name: "AMG"
        },
        {
            img: "./images/Classnew.png",
            name: "C-Class"
        },   
    ];
    return (
            <div className="bg-[#212529] flex justify-evenly h-48  px-32 ">
            {Images.map((value, key) =>{
                return (
                        <div className="flex first:border-r-2 last:border-l-2 text-slate-200  px-14 ">
                            <img src={value.img} alt="" className="overflow-hidden h-full w-72 object-cover " />
                                <div className=" text-xl mt-16 ml-[1rem] mr-6 ">
                                    <h1 >{value.name}</h1>
                                    <button className="text-base mt-2 border-2 h-9 w-20 rounded-lg hover:bg-[#66696b]">SHOP</button>
                                </div>
                        </div>
                );
            })}
            </div>
    );
};

export default Wapper;