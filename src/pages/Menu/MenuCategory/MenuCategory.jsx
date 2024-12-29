import Cover from "../../shared/Cover/COver";
import MenuItem from "../../shared/MenuItem/MenuItem";

const MenuCategory = ({ item, cover, title, text }) => {
  return (
    <div>
      {cover && (
        <Cover
          image={cover}
          tittle={title}
          text={text}
          backgroundColour="text-white bg-black bg-opacity-50"
        />
      )}
      <div className="grid md:grid-cols-2 gap-10 py-16">
        {item.map((item) => (
          <MenuItem item={item} key={item._id} />
        ))}
      </div>
      {/* <div className="flex justify-center">
        <button className="btn btn-outline border-0 border-b-2 text-center mb-8">
          View all menu
        </button>
      </div> */}
    </div>
  );
};

export default MenuCategory;
