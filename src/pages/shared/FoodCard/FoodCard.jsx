import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const email = user.email;
  const handleAddToCart = async () => {
    const cartItems = { name, image, price, email };
    const response = await axiosSecure.post("/carts", cartItems);
    const data = response.data;
    if (data) {
      Swal.fire({
        title: "Good job!",
        text: "Product added to the cart!",
        icon: "success",
      });
    }
  };
  return (
    <div className=" bg-base-200  ">
      <figure className="relative">
        <img src={image} alt={name} />
        <p className="text-white bg-black px-4 py-2 absolute top-5 right-5">
          ${price}
        </p>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>

        <div className="card-actions justify-center">
          <button
            onClick={handleAddToCart}
            className="btn uppercase text-yellow-500 border-b-2 border-yellow-500 border-0 hover:bg-black"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
