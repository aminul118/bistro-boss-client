import { NavLink, Outlet } from "react-router-dom";
import { FaCartArrowDown, FaHome } from "react-icons/fa";
import { FaBook, FaList, FaUsers, FaUtensils } from "react-icons/fa6";
import { MdMenuBook } from "react-icons/md";
// import useCart from "../hooks/useCart";
import { IoCall } from "react-icons/io5";
import useAdmin from "../hooks/useAdmin";

const DashboardLayout = () => {
  // const [cart] = useCart();

  //  Todo: get is admin from database
  const [isAdmin] = useAdmin();
  console.log(isAdmin);

  return (
    <div className="flex gap-8 container mx-auto h-screen">
      {/* Dashboard Sidebar */}
      <ul className="w-64 bg-red-300 px-10 py-20 space-y-3 menu">
        {isAdmin ? (
          <>
            <li>
              <NavLink
                to="/dashboard/adminHome"
                className="flex items-center gap-3"
              >
                <FaHome /> Admin Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/addItems"
                className="flex items-center gap-3"
              >
                <FaUtensils />
                Add Items
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/manageItems"
                className="flex items-center gap-3"
              >
                <FaList />
                Manage Items
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/manageBookings"
                className="flex items-center gap-3"
              >
                <FaBook />
                Manage Bookings
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/allUsers"
                className="flex items-center gap-3"
              >
                <FaUsers />
                All Users
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <NavLink to="/dashboard/cart" className="flex items-center gap-3">
              <FaCartArrowDown /> Cart
            </NavLink>
          </>
        )}
        {/* Shared navLinks */}
        <div className="divider"></div>
        <li>
          <NavLink to="/" className="flex items-center gap-3">
            <FaHome /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu" className="flex items-center gap-3">
            <MdMenuBook /> Menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="flex items-center gap-3">
            <IoCall /> contact
          </NavLink>
        </li>
      </ul>

      <div className="flex-1 py-20">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
