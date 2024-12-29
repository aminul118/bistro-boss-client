import Cover from "../../shared/Cover/COver";
import orderImg from "../../../assets/shop/cover.jpg";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenuCategory from "../../../hooks/useMenuCategory";
import FoodCardContainer from "../../../components/FoodCardContainer";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [drinks, dessert, pizza, salad, soup] = useMenuCategory();
  return (
    <div className="mb-14">
      <Cover
        image={orderImg}
        tittle="Order Food"
        text="You can order foorm from this section"
        backgroundColour="bg-black text-white bg-opacity-50"
      />

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div className="flex justify-center py-8">
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>
        </div>
        <TabPanel>
          <FoodCardContainer item={salad} />
        </TabPanel>
        <TabPanel>
          <FoodCardContainer item={pizza} />
        </TabPanel>
        <TabPanel>
          <FoodCardContainer item={soup} />
        </TabPanel>
        <TabPanel>
          <FoodCardContainer item={dessert} />
        </TabPanel>
        <TabPanel>
          <FoodCardContainer item={drinks} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
