import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import logo from "../../../assets/images/logo.jpg";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {});
  };
  return (
    <div className="bg-primary">
      <div className="navbar justify-between container">
        <div>
          <div className="md:hidden">
            <div className="dropdown ">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="courses">Courses</Link>
                </li>
                <li>
                  <Link to="FAQ">FAQ</Link>
                </li>
                <li>
                  <Link to="blog">Blog</Link>
                </li>
                <li>
                  Dark Theme
                  <input
                    type="checkbox"
                    className="toggle toggle-secondary"
                    checked
                  />
                </li>
              </ul>
            </div>
          </div>
          <NavLink>
            <img
              style={{ display: "inline" }}
              className="h-12"
              src={logo}
              alt=""
            />
            &nbsp;
            <span className="text-white">Learn Web Development</span>
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive, isPending }) => {
              return isActive ? "active" : "normal-link";
            }}
          >
            Courses{" "}
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) => {
              return isActive ? "active" : "normal-link";
            }}
            to="courses"
          ></NavLink>
          <NavLink
            className={({ isActive, isPending }) => {
              return isActive ? "active" : "normal-link";
            }}
            to="FAQ"
          >
            FAQ
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) => {
              return isActive ? "active" : "normal-link";
            }}
            to="blog"
          >
            Blog
          </NavLink>
          Dark Theme
          <input type="checkbox" className="toggle toggle-secondary" checked />
          {user?.uid ? (
            <>
              <div className="avatar">
                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user?.photoUrl} alt="" />
                </div>
              </div>
              <button className="btn btn-error">Logout</button>
            </>
          ) : (
            <button className="btn btn-sm">Log In</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
