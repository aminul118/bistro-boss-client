const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
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
          <button className="btn uppercase text-yellow-500 border-b-2 border-yellow-500 border-0 hover:bg-black">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
