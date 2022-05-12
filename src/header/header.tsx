

const  Header = ()=> {
  return (
    <header className="bg-[#212529] text-zinc-50 h-16 " >
        <div className="flex justify-between w-full px-40 pt-3 h-16 items-center">
          <div className="flex flex-row justify-center items-center space-x-4 pb-2">
          <a href="a"> <img src="./images/logom.png" alt="logo" className=" w-14 h-16 "/> </a>
            <a className="hover:text-gray-400" href="a"><h1 className="text-3xl font-bold font-serif">Mercedes-Benz</h1></a>
          </div>        
              <form className="inline relative">
                    <input type="text" className="mr-56 w-[30rem] rounded-[0.2rem] outline-none text-black"/>
                    <i className="fa fa-search absolute pt-1 right-[14.5rem] text-black hover:text-gray-600" aria-hidden="true"></i>
              </form>
              <div className="flex relative ">
                <i className="fa fa-cart-arrow-down text-5xl absolute right-14 bottom-1 hover:text-gray-400 cursor-pointer" aria-hidden="true"></i>
                <a href="a" className="hover:text-gray-400" ><p className="text-2xl font-bold font-serif" >Cart</p></a>
              </div>
        </div>
    </header>
    
  );
}

export default Header;
