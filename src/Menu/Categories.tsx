import React from "react";

const Categories = () => {
  return (
    <div className="container m-auto space-y-10">
      <h1 className="text-4xl">Các dòng xe Mercedes-Benz</h1>
      <div className="">
        <ul className="flex justify-start ">
          <li className=" hover:no-underline p-5 bg-black text-white border-gray-600 border-[1px] border-r-0">
            <a href="a">Tất cả các dòng xe</a>
          </li>
          <li className=" hover:no-underline p-5 bg-white text-black border-gray-600 border-[1px] border-r-0">
            <a href="a">MERCEDES-EQ</a>
          </li>
          <li className=" hover:no-underline p-5 bg-white text-black border-gray-600 border-[1px] border-r-0">
            <a href="a"> MERCEDES-AMG</a>
          </li>
          <li className=" hover:no-underline p-5 bg-white text-black border-gray-600 border-[1px] border-r-0">
            <a href="a"> MAYBACH</a>
          </li>
          <li className=" hover:no-underline p-5 bg-white text-black border-gray-600 border-[1px] ">
            <a href="a">
              <i> Các dòng xe mới</i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Categories;
