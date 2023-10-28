import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Profile from "./pages/Profile";

const App = () => {
  return (
 <Routes>
  <Route path="/" element={<DefaultLayout />}>
    <Route path="" element={<Home />} index />
    <Route path="products/:id" element={<Products />} />
    <Route path="profile" element={<Profile />} />
  </Route>
 </Routes>
  );
};

export default App;
