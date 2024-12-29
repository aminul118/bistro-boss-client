import FoodCard from "../../shared/FoodCard/FoodCard";


const OrderTab = ({items}) => {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
        {items.map((item) => (
          <FoodCard item={item} key={item._id} />
        ))}
      </div>
    );
};

export default OrderTab;