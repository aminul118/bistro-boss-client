import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
const DashboardLayout = () => {
  return (
    <div className="flex gap-8 container mx-auto h-screen">
      <ul className="w-64 bg-red-300 px-10 py-20 space-y-3">
        <li>
          <NavLink to="/dashboard/profile" className="flex items-center gap-3">
            <FaUser /> Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/cart" className="flex items-center gap-3">
            <FaCartShopping />
            My Cart
          </NavLink>
        </li>

        <div className="divider"></div>
        <li>
          <NavLink to="/" className="flex items-center gap-3">
            <FaHome /> Home
          </NavLink>
        </li>
      </ul>
      <ul>
        <li></li>
      </ul>

      <div className="flex-1 py-20">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
