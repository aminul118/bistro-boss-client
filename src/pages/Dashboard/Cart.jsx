import { FaTrash } from "react-icons/fa6";
import useCart from "../../hooks/useCart";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  // console.log(cart);
  const totalPrice = cart.reduce((previous, current) => {
    return previous + current.price;
  }, 0);
  console.log(totalPrice);
  const handleDeleteCartItem = (id) => {
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
        // if confirm then delete process starts

        axiosSecure.delete(`/carts/${id}`).then((res) => {
          // console.log(res.data);
          if (res.data.deletedCount > 0) {
            // Data refetch and real time update cart
            refetch();
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
    <section>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Items : {cart.length}</h1>
        <h1 className="text-3xl font-semibold">Total Price : ${totalPrice}</h1>
        <button className="btn btn-primary">Pay</button>
      </div>

      <div className="divider"></div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SI</th>
              <th>Name</th>
              <th>Job</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((item, i) => (
              <tr key={item._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td>${item.price}</td>

                <th>
                  <button onClick={() => handleDeleteCartItem(item._id)}>
                    <FaTrash className="text-red-500 text-xl" />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Cart;
