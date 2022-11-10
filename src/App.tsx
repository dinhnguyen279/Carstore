import React from "react";
import Footer from "./Footers/Footer";
import Header from "./Headers/Header";
import Introduce from "./Introduces/Introduce";
import Mains from "./Menu/Main";
import Navbar from "./Nav/Navbar";
import images from "./Wappers/data";
import Wapper from "./Wappers/Wapper";

function App() {
  return (
    <div className="h-full w-full relative">
      <Header />
      <Navbar />
      <Introduce />
      <Wapper Images={images} />
      <Mains />
      <Footer />
    </div>
  );
}

export default App;
