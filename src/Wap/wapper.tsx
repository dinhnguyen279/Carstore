import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./wapper.css";
import { Images } from "../Wappers/data";

interface Props {
  Images: Images[];
}
const Wapper: React.FC<Props> = (Images) => {
  const listProducts = Images.Images;
  return (
    <div className="bg-[#212529] font-serif">
      <div className="space-y-10 container m-auto mb-10">
        <h1 className="text-white text-3xl p-10 "> Tìm hiểu thêm</h1>
        <Swiper
          slidesPerView={4}
          spaceBetween={40}
          pagination={{
            clickable: true,
          }}
          navigation={{
            enabled: true,
          }}
          modules={[Pagination, Navigation]}
          className="h-full w-3/4"
        >
          {listProducts.map((value, key) => {
            return (
              <SwiperSlide key={key} className=" bg-[#43464a] rounded-xl">
                <img
                  src={value.img}
                  alt="Hình ảnh tượng trưng"
                  className="block overflow-auto max-w-xs max-h-40 object-cover"
                />
                <div className="flex flex-col justify-between items-center bg-[#66696b] text-white text-xl w-full h-[20vh] mt-24 p-5">
                  <h1>{value.name}</h1>
                  <button className="bg-white w-full  text-black text-base rounded-xl p-3 border border-black hover:bg-slate-200">
                    Tìm xe có sẵn
                  </button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="bg-[#43464a] w-full text-white text-2xl font-medium p-5 pl-56">
        <h1>WELCOME TO MERCEDES</h1>
      </div>
    </div>
  );
};

export default Wapper;
