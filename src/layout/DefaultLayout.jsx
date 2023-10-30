import React from "react";
import { Link, Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/posts">Posts</Link>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
