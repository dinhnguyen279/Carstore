const Header = () => {
  return (
    <div className="bg-[#212529]">
      <div className="flex justify-between items-center container mx-auto p-4">
        <div className="absolute">
          <a className="flex justify-center items-center space-x-4" href="/">
            <img
              src="./images/logoNguyen.png"
              alt="logo"
              className="w-14 h-16"
            />
            <h1 className="text-3xl font-bold font-serif text-zinc-50 ">
              Mercedes-Benz
            </h1>
          </a>
        </div>
        <form
          className=" w-full h-full flex justify-center items-center space-x-2 "
          role="search"
        >
          <input
            type="search"
            placeholder="Search"
            aria-label="Search"
            className="w-2/5 h-8 rounded-md outline-none text-black px-10"
          />
          <button>
            <i
              className="fa fa-search text-xl text-white hover:text-gray-600"
              aria-hidden="true"
            ></i>
          </button>
        </form>
        <i
          className=" fa fa-cart-arrow-down text-5xl text-zinc-50 hover:text-gray-400 cursor-pointer"
          aria-hidden="true"
        ></i>
      </div>
    </div>
  );
};

export default Header;
