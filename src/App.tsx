import Navbar from "./Navbar/navbar";
import Introduce from "./Introduce/introduce";
import Wapper from "./Wapper/wapper";
import images from "./Wapper/data";
import Main from "./Main/main";
import Footer from "./Footer/footer";
import Header from "./Header/header";

function App() {
  return (
    <div className="h-full w-full relative">
      <Header />
      <Navbar />
      <Introduce />
      <Wapper Images={images} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
