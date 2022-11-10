const Mains = () => {
  const CarsOne = [
    {
      image: "./images/EClass.png",
      name: "E-Class",
      price: "$100.000",
    },
    {
      image: "./images/g63.png",
      name: "G63 AMG ",
      price: "$100.000",
    },
    {
      image: "./images/GLC300.png",
      name: "GLC 300",
      price: "$100.000",
    },
    {
      image: "./images/Mer-S.png",
      name: "S-Class",
      price: "$100.000",
    },
    {
      image: "./images/Maybach.png",
      name: "MayBach S650",
      price: "$100.000",
    },
    {
      image: "./images/AMG-GT.png",
      name: "AMG GT",
      price: "$100.000",
    },
  ];

  return (
    <div className=" bg-[#212529]">
      <div className="p-5 container mx-auto w-full h-full grid grid-cols-3 grid-rows-3 gap-10">
        {CarsOne.map((value, key) => {
          return (
            <div
              key={key}
              className="text-center text-zinc-50 border-2 border-b-8 border-b-[#6a6c6ef0] border-zinc-50  hover:bg-[#43464a]"
            >
              <div className="w-full h-10">
                <h1 className="font-sans text-3xl">{value.name}</h1>
                <div className="text-2xl">
                  <span>
                    {value.price}
                    <button className="border-2 w-32 rounded-lg bg-[#43464a] hover:bg-[#6a6c6ef0] ">
                      BUY NOW
                    </button>
                  </span>
                </div>
              </div>
              <img
                className="max-w-xs max-h-28 object-cover block overflow-auto"
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
