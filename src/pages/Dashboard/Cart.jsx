import { FaTrash } from "react-icons/fa6";
import useCart from "../../hooks/useCart";

const Cart = () => {
  const [cart] = useCart();
  return (
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
                <button>
                  <FaTrash className="text-red-500 text-xl" />
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
