import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        localStorage.clear();
      })
      .catch((error) => {});
  };

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/appointment">Appointments</Link>
      </li>

      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>

      <div>
        {user?.email ? (
          <Link to="/login">
            <button onClick={handleSignOut} className="btn btn-sm mt-1 bg-red-600">
              Sign out
            </button>
          </Link>
        ) : (
          <li>
            <Link className="btn btn-primary btn-sm btn-outline" to="/login">
              Sign in
            </Link>
          </li>
        )}
      </div>
    </>
  );
  return (
    <div className="navbar w-[1200px] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <FaBars></FaBars>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case font-mono text-2xl">
          Doctors Portal
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0 font-medium text-sm">{menuItems}</ul>
      </div>
      <label tabIndex={2} htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden">
        <FaBars></FaBars>
      </label>
    </div>
  );
};

export default Header;
