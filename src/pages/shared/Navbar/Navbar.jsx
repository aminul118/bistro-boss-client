import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut, loading } = useAuth();
  // console.log(loading);
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order/salad">Order Food</NavLink>
      </li>
    </>
  );

  const adminLinks = (
    <>
      <li>
        <a className="justify-between">Profile</a>
      </li>
      <li>
        <a>Settings</a>
      </li>
      <li>
        <button onClick={logOut} className="bg-base-200">
          Logout
        </button>
      </li>
    </>
  );

  return (
    <header className="fixed z-50 w-full ">
      <div className="navbar container mx-auto  backdrop-blur-xl">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="text-white text-xl">
            Bisto Boss
          </Link>
        </div>
        <div>
          <div className="navbar-center hidden lg:flex ">
            <ul className="menu menu-horizontal px-1 gap-4 ">{navLinks}</ul>
          </div>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          <div className="flex-none">
            {loading ? (
              <>
                <span className="loading loading-ring loading-lg"></span>
              </>
            ) : user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="User Avatar"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  {adminLinks}
                </ul>
              </div>
            ) : (
              <div>
                <Link to="/login" className="btn">
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
