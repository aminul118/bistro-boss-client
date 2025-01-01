import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";
const DashboardLayout = () => {
  return (
    <div className="flex gap-8 container mx-auto h-screen">
      <ul className="w-64 bg-red-300 px-10 py-20">
        <li>
          <NavLink to="/dashboard/profile" className="flex items-center gap-3">
            <FaUser /> Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="flex items-center gap-3">
            <FaHome /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
      </ul>

      <div className="flex-1 py-20">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
