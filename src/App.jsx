import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import Home from "./pages/Home";
import Users from "./pages/Users";
import User from "./pages/User";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="" element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<User />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
