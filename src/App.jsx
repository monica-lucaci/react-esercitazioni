import { Routes,Route } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import Home from "./pages/Home";
import Page from "./pages/Page";
import Posts from "./pages/Posts";

function App() {
  return (
  <>
  <Routes>
    <Route path="/" element={<DefaultLayout />}>
      <Route path="" element={<Home />} />
      <Route path="page" element={<Page />} />
      <Route path="posts" element={<Posts />} />
    </Route>
  </Routes>
  </>
  );
}

export default App;
