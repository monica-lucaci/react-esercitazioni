import { Link, Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/users">Users</Link> |{" "}
        <Link to="/comments">Comments</Link> | <Link to="/photos">Photos</Link>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default DefaultLayout;
