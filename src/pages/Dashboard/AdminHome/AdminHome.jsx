import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../shared/Loading";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data, isLoading } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure("/admin-stats");
      return res.data;
    },
  });
  //   console.log(data);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2 className="text-3xl font-semibold">
        Hi, Welcome <br />
        <span>{user?.displayName ? user.displayName : "Back"} </span>
      </h2>

      <div className="flex items-center justify-center py-8">
        {/* Total Users */}
        <div className="stats shadow">
          <div className="stat place-items-center">
            <div className="stat-title">Total Users</div>
            <div className="stat-value">{data.totalUser}</div>
          </div>
          {/* Total Menus */}
          <div className="stat place-items-center">
            <div className="stat-title">Total Menus</div>
            <div className="stat-value text-secondary">
              {data.totalFoodMenus}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
