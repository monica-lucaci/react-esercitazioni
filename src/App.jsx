import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="" element={<Home />} index />
          <Route path="posts" element={<Posts />} />
          <Route path="poosts/:id" element={<Post />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
