import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaEdit, FaTrash } from "react-icons/fa";

const ManageItems = () => {
  const [menu] = useMenu();
  const axiosSecure = useAxiosSecure();
  //   console.log(menu);

  const handleDeleteUser = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/menu/${id}`).then((res) => {
          if (res) {
            console.log(res.data.deletedCount > 0);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <SectionTitle title="Manage Items" subtitle="Hurry Up" />
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>SI.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>

              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {menu.map((item, i) => (
              <tr key={item._id}>
                <td>{i + 1}</td>

                <td>
                  <img
                    className="w-12 h-12 rounded-lg object-cover "
                    src={item.image}
                    alt=""
                  />
                </td>
                <td>{item.name}</td>

                <td>{item.price}$</td>
                <td>
                  <FaEdit />{" "}
                </td>
                <td>
                  <button onClick={() => handleDeleteUser(item._id)}>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
