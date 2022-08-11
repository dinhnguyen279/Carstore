import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import "./index.css";
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
    <div className="bg-[#212529]">
      <h1 className="text-white text-3xl p-10 font-serif"> Tìm hiểu thêm</h1>
      <Swiper
        slidesPerView={2.5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="container mx-auto h-full w-full"
      >
        {Images.map((value, key) => {
          return (
            <SwiperSlide key={key} className="">
              <img
                src={value.img}
                alt="Hình ảnh tượng trưng"
                className="block overflow-auto max-w-xs max-h-40 object-cover"
              />
              <div className="flex flex-col justify-between items-center bg-white text-black text-xl w-full h-[20vh] my-16 p-5">
                <h1>{value.name}</h1>
                <button className="bg-blue-600 w-full  text-white text-base p-3 border-2 rounded-sm hover:bg-blue-800">
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
