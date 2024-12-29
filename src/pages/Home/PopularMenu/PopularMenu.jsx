import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularMenu = data.filter((item) => item.category === "popular");
        setMenu(popularMenu);
      });
  }, []);
  return (
    <section >
      <SectionTitle subtitle="Popular Menu" title="FROM OUR MENU" />
      <div className="grid md:grid-cols-2 gap-10 py-8">
        {menu.map((item) => (
          <MenuItem item={item} key={item._id} />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn btn-outline border-0 border-b-2 text-center mb-8">
          View all menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
