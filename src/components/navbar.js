import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isInCompletedPage = location.pathname === "/completed";
  
  return (
      <nav className="navbar navbar-dark bg-dark mt-2">
        <div className="navbar-brand ms-2">To-do-list</div>
        <Link to={isInCompletedPage ? '/' : '/completed'} className='btn btn-success me-2 active'>
        {isInCompletedPage ? 'All tasks' : 'Completed tasks'}
      </Link>
      </nav>
  );
};

export default Navbar;
