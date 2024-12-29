import FoodCard from "./FoodCard";

const FoodCardContainer = ({ item }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
      {item.map((item) => (
        <FoodCard item={item} key={item._id} />
      ))}
    </div>
  );
};

export default FoodCardContainer;
