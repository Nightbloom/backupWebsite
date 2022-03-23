import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
<<<<<<< HEAD
import { Home } from "./components/Home";
import Product from './pages/Product';
import Cart from './pages/Cart';
=======
import Product from "./pages/Product";
import Cart from "./pages/Cart";
>>>>>>> 0f0980bf694fc7cad997ad6e79386a8ede3c6971
import Checkout from "./pages/Checkout";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import Payment from "./pages/Payment";
<<<<<<< HEAD
import TestProcuts from "./pages/TestProducts"

=======
import TestProducts from "./pages/TestProducts";
import Caribbean_tikki from "./components/caribbean_tikki/caribbean_tikki";
import Belgium_nutty from "./components/belgium_nutty/belgium_nutty";
import Black_rice_payassam from "./components/black_rice_payassam/black_rice_payassam";
import Kajjor_laddu from "./components/kajjor_laddu/kajjor_laddu";
import Bulgar_sugarcane_halwa from "./components/bulgar_sugarcane_halwa/bulgar_sugarcane_halwa";
import Combo1 from "./components/combo1/combo1";
>>>>>>> 0f0980bf694fc7cad997ad6e79386a8ede3c6971

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Route path="/" exact component={Home} />
<<<<<<< HEAD
      <Route path='/products' component = {TestProcuts}/>
      <Route path='/checkout' component = {Checkout}/>
      <Footer/>
      
=======
      <Route path="/products" component={TestProducts} />
      <Footer />
>>>>>>> 0f0980bf694fc7cad997ad6e79386a8ede3c6971
    </BrowserRouter>
  );
}

export default App;
