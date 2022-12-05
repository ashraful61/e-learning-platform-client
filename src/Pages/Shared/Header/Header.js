import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import logo from "../../../assets/images/logo.jpg";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(false)
  console.log('aaaa', user)

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
            <div className="dropdown">
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
                className=" bg-primary menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
              >
                <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) => {
                    return isActive ? "active" : "normal-link";
                  }}
                >
                  Courses{" "}
                </NavLink>
                </li>
              <li>
              <NavLink
                  className={({ isActive, isPending }) => {
                    return isActive ? "active" : "normal-link";
                  }}
                  to="/FAQ"
                >
                  FAQ
                </NavLink>
              </li>
                <li>
                <NavLink
                  className={({ isActive, isPending }) => {
                    return isActive ? "active" : "normal-link";
                  }}
                  to="/blog"
                >
                  Blog
                </NavLink>
                </li>
                <span style={{ display: "flex" }} className="text-white">
                  Dark Mode &nbsp;
                  <input
                    type="checkbox"
                    className="toggle toggle-secondary"
                    defaultChecked
                  />
                </span>
                &nbsp;
                {user?.uid ? (
                  <>
                    <div className="avatar">
                      <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoUrl} alt="" />
                      </div>
                    </div>
                    <button onClick={handleLogOut} className="btn btn-error">
                      Logout
                    </button>
                  </>
                ) : (
                  <Link to='/login'>
                  <button className="btn btn-primary">Log In</button>
                  </Link>
                )}
              </ul>
            </div>
          </div>
          <Link to="/">
            <img
              style={{ display: "inline" }}
              className="h-12"
              src={logo}
              alt=""
            />
            &nbsp;
            <span className="text-white">Learn Web Development</span>
          </Link>
        </div>
        <div className="hidden md:flex">
          <NavLink
            to="/"
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
            to="/FAQ"
          >
            FAQ
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) => {
              return isActive ? "active" : "normal-link";
            }}
            to="/blog"
          >
            Blog
          </NavLink>
          <span style={{ display: "flex" }} className="text-white">
            Dark Mode &nbsp;
            <input
            onClick={() => setTheme(!theme)}
              type="checkbox"
              className="toggle toggle-secondary"
              check={false}
            />
          </span>
          &nbsp;
          {user?.uid ? (
            <>
            <div className="tooltip tooltip-left" data-tip={user?.displayName}>
              <div className="avatar cursor-pointer">
                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user?.photoURL} alt="" />
                </div>
              </div>
              </div>
              <button onClick={handleLogOut} className="btn btn-error btn-sm ml-3">
                Logout
              </button>
         
            </>
          ) : (
            <>
            <Link to='/login'>
            <button className="btn btn-primary">Log In</button>
            </Link>
             <Link to='/register'>
             <button className="btn btn-primary">Register</button>
             </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
