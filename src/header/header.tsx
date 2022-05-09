

const  Header = ()=> {
  return (
    <header className="bg-[#212529] text-zinc-50 " >

        <div className="flex flex-wrap justify-between w-full  px-40 pt-3 h-16">
           <img src="./images/logom.png" alt="logo" className="absolute w-14 h-16 top-0 left-6 "/> 
            <h1 className="text-3xl font-bold font-serif">Mercedes-Benz</h1>
              <form className="inline relative">
                    <input type="text" className="mt-2 w-96 rounded-[0.2rem] outline-none"/>
                    <i className="fa fa-search absolute pt-3 right-3 text-black " aria-hidden="true"></i>
              </form>
              <div className="flex relative ">
                <i className="fa fa-cart-arrow-down text-5xl absolute right-14 bottom-1  cursor-pointer" aria-hidden="true"></i>
                <p className="text-2xl font-bold font-serif" >cart</p>
              </div>
        </div>
    </header>
    
  );
}

export default Header;
