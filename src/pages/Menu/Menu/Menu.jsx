import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/COver";
import SectionTitle from "../../../components/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import menuImg from "../../../assets/menu/banner3.jpg";
import desertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenuCategory from "../../../hooks/useMenuCategory";

const Menu = () => {
  //   const [menu] = useMenu();
  //   const offered = menu.filter((item) => item.category === "offered");
  //   const dessert = menu.filter((item) => item.category === "dessert");
  //   const pizza = menu.filter((item) => item.category === "pizza");
  //   const salad = menu.filter((item) => item.category === "salad");
  //   const soup = menu.filter((item) => item.category === "soup");
  
  const [offered, dessert, pizza, salad, soup] = useMenuCategory();

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* Main Cover */}
      <Cover
        image={menuImg}
        tittle="Our Menu"
        text="Would you like to try a dish?"
        backgroundColour="text-white bg-black bg-opacity-50"
      />
      <SectionTitle subtitle="Don't Miss" title="Today's offer" />
      <MenuCategory item={offered} />
      {/* Desert */}
      <MenuCategory
        cover={desertImg}
        text="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        title="desert"
        item={dessert}
      />
      {/* Pizza */}
      <MenuCategory
        cover={pizzaImg}
        text="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        title="pizza"
        item={pizza}
      />
      {/* Salad */}
      <MenuCategory
        cover={saladImg}
        text="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        title="salad"
        item={salad}
      />
      {/* Soup */}
      <MenuCategory
        cover={soupImg}
        text="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        title="soup"
        item={soup}
      />
    </div>
  );
};

export default Menu;
