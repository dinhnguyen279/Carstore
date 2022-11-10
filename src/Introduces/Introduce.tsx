const Introduce = () => {
  return (
    <div className="bg-[#43464a] h-full w-full ">
      <div className="container mx-auto flex flex-wrap md:justify-between justify-center items-center text-zinc-100">
        <img
          src="./images/inroduce.png"
          alt="Hình giới thiệu"
          className="w-3/4 p-10"
        />
        <div className="flex flex-col flex-wrap text-2xl space-y-16">
          <div className="flex flex-col space-y-2">
            <span className="text-6xl font-medium ">S - Class New</span>
            <span className="">Một hành trình phi thường.</span>
          </div>
          <button className="space-y-10 border-2 font-medium rounded-lg p-2 w-full h-full md:w-1/2 hover:bg-[#66696b]">
            Tìm hiểu thêm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
