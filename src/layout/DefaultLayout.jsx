import { Link, Outlet } from "react-router-dom"

const DefaultLayout = () => {
  return (
   <>
   <nav>
    <Link to="/">Home</Link> | <Link to="/carts">Carts</Link>
   </nav>
   <div>
    <Outlet />
   </div>
   </>
  )
}

export default DefaultLayout