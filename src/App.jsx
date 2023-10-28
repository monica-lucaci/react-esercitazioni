import { Route, Routes } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import Home from "./pages/Home"
import Carts from "./pages/Carts"


function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index path="" element={<Home />} />
        <Route path="carts" element={<Carts />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
