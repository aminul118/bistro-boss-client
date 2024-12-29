import Cover from "../../shared/Cover/COver";
import orderImg from "../../../assets/shop/cover.jpg";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenuCategory from "../../../hooks/useMenuCategory";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "desert", "drink"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [drinks, dessert, pizza, salad, soup] = useMenuCategory();
  // console.log(initialIndex);
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
          <OrderTab items={salad} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
