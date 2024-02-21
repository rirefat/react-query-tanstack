import AddProduct from "./components/AddProduct/AddProduct";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Products from "./components/Products/Products";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}

      <div className="flex flex-wrap">
        {/* left section */}
        <div className="left-section w-1/2">
          <Products />
          <hr /><hr />
          <AddProduct />
        </div>

        {/* Right Section */}
        <div className="right-section w-1/2">
          <ProductDetails id={1}/>
        </div>
      </div>
      
      {/* <Footer /> */}
    </>
  );
};

export default App;