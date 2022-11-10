import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import "./wapper.css";
const Wapper = () => {
  const Images = [
    {
      img: "./images/mecrEQS.png",
      name: "EQS",
    },

    {
      img: "./images/AclassAMG.png",
      name: "AMG",
    },
    {
      img: "./images/Classnew.png",
      name: "C-Class",
    },
    {
      img: "./images/img-wapper1.png",
      name: "C-Class",
    },
    {
      img: "./images/img-wapper2.png",
      name: "C-Class",
    },
    {
      img: "./images/img-wapper3.png",
      name: "C-Class",
    },
  ];
  return (
    <div className="bg-[#212529] space-y-10">
      <h1 className="text-white text-3xl p-10 font-serif"> Tìm hiểu thêm</h1>
      <Swiper
        slidesPerView={2.5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="container mx-auto h-full w-1/2"
      >
        {Images.map((value, key) => {
          return (
            <SwiperSlide key={key} className=" bg-[#43464a]">
              <img
                src={value.img}
                alt="Hình ảnh tượng trưng"
                className="block overflow-auto max-w-xs max-h-40 object-cover"
              />
              <div className="flex flex-col justify-between items-center bg-[#66696b]  text-white text-xl w-full h-[20vh] mt-24 p-5">
                <h1>{value.name}</h1>
                <button className="bg-white w-full  text-black text-base p-3 border border-black rounded-sm hover:bg-slate-200">
                  Tìm xe có sẵn
                </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="bg-[#43464a] h-1/2 w-full text-white text-2xl  font-medium p-5 ">
        <h1>WELCOME TO MERCEDES</h1>
      </div>
    </div>
  );
};

export default Wapper;
