import { Link } from "react-router-dom";
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
      <div className="grid md:grid-cols-2 gap-10 mt-12">
        {item.map((item) => (
          <MenuItem item={item} key={item._id} />
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          to={`/order/${title}`}
          className="btn btn-outline border-0 border-b-2 text-center mb-12"
        >
          View all {title}
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
