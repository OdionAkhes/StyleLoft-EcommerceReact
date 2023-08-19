import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar, Sidebar, Footer } from "./components"
import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
  AuthWrapper,
} from "./pages";
function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/checkout" element={<Checkout/>}/>


        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
 </Router>
  );
}

export default App;