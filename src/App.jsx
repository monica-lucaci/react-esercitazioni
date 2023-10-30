import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import Home from "./pages/Home";
import Comments from "./pages/Comments";
import Comment from "./pages/Comment";

const App = () => {


  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="" index element={<Home />} />
          <Route path="comments" element={<Comments />} />
          <Route path="comments/:id" element={<Comment />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
