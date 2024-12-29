const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex justify-between gap-4">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[118px] h-[104px] object-cover "
        src={image}
        alt=""
      />

      <div>
        <h3 className="text-xl font-semibold">{name} --------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
   
    </div>
  );
};

export default MenuItem;
