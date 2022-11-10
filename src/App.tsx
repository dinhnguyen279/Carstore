import React from "react";
import Footer from "./Footers/Footer";
import Header from "./Headers/Header";
import Introduce from "./Introduces/Introduce";
import Cars from "./Menu/data";
import Mains from "./Menu/Main";
import Navbar from "./Navbars/Navbar";
import images from "./Wappers/data";
import Wapper from "./Wappers/Wapper";

function App() {
  return (
    <div className="h-full w-full relative">
      <Header />
      <Navbar />
      <Introduce />
      <Wapper Images={images} />
      <Mains CarsProducts={Cars} />
      <Footer />
    </div>
  );
}

export default App;
