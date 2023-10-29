import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Comments from "./pages/Comments";
import Photos from "./pages/Photos";

function App() {
  return (
    <Routes >
      <Route path="/" element={<DefaultLayout />}>
        <Route path="" element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="comments" element={<Comments />} />
        <Route path="photos" element={<Photos />} />
      </Route>
    </Routes>
  );
}

export default App;
