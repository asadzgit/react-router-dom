import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import { Navbar } from "./components/Navbar";
import NoPage from "./components/NoPage";
import { OrderSummary } from "./components/OrderSummary";
import { Products } from "./components/Products";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { NewProducts } from "./components/NewProducts";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
    {/* we are doing this for our within-app routes. but for links to external resources, use anchor tag */}
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="order-summary" element={<OrderSummary />} />

      {/* Nested Route : A common use case is of layout containing its nested pages */}
      <Route path="products" element={<Products />}>
        {/* index route : when making one of the nested route to be rendered at the parent url  */}
        <Route index element={<FeaturedProducts />} />
        <Route path="featured" element={<FeaturedProducts />}></Route>
        <Route path="new" element={<NewProducts />}></Route>
      </Route>
      <Route path="*" element={<NoPage />} />
    </Routes>
    </>
  );
}

export default App;
