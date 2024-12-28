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
    <section>
      <SectionTitle subtitle="Popular Menu" title="FROM OUR MENU" />
      <div className="grid md:grid-cols-2 gap-10 py-8">
        {menu.map((item) => (
          <MenuItem item={item} key={item._id} />
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
