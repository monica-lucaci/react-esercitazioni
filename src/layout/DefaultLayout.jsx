import { Link, Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/page">Page</Link> |{" "}
        <Link to="/posts">Posts</Link>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default DefaultLayout;
