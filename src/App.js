import React from 'react'; 
import { Route, Routes } from "react-router-dom";
// import About from "./components/About";
import { Admin } from "./components/Admin";
import Home from "./components/Home";
import { Navbar } from "./components/Navbar";
import NoPage from "./components/NoPage";
import { OrderSummary } from "./components/OrderSummary";
import { Products } from "./components/Products";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { NewProducts } from "./components/NewProducts";
import { Users } from "./components/Users";
import { UserDetails } from "./components/UserDetails";
import { Profile } from './components/Profile';
import { AuthProvider } from './components/auth';
import { Login } from './components/Login';
import { RequireAuth } from './components/RequireAuth';
const LazyAbout = React.lazy(() => import("./components/About"));

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
      {/* we are doing this for our within-app routes. but for links to external resources, use anchor tag */}
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback='Loading...'>
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummary />} />

        {/* Nested Route : A common use case is of layout containing its nested pages */}
        <Route path="products" element={<Products />}>
          {/* index route : when making one of the nested route to be rendered at the parent url  */}
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />}></Route>
          <Route path="new" element={<NewProducts />}></Route>
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />}></Route>
          <Route path="admin" element={<Admin />}></Route>
        </Route>
        <Route path="profile" element={<RequireAuth><Profile /></RequireAuth>}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
