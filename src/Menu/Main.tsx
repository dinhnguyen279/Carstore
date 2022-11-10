import React from "react";
import Categories from "./Categories";
import { CarsProducts } from "./data";

interface Props {
  CarsProducts: CarsProducts[];
}
const Mains: React.FC<Props> = (Products) => {
  const Product = Products.CarsProducts;
  return (
    <div className="py-10">
      <Categories />
      <div className="container m-auto grid lg:grid-cols-3 grid-cols-2 gap-10 py-10">
        {Product.map((value, key) => {
          return (
            <div
              key={key}
              className="flex flex-col items-center text-center text-gray-500 transition ease-in hover:scale-110 cursor-pointer"
            >
              <div className="">
                <h1 className="text-2xl">{value.name}</h1>
                <div className="text-xl text-slate-400">
                  <p>
                    Giá từ {""}
                    <span>{value.price} </span>
                  </p>
                </div>
              </div>
              <img
                loading="lazy"
                className="object-cover w-3/4"
                src={value.image}
                alt="Hình minh họa"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Mains;
