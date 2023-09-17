import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useFoodItemsMenu from '../../hooks/useFoodItemsMenu';
import OurItemsMenu from '../OurItemsMenu/OurItemsMenu';
import FoodCard from './FoodCard';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';

const OurShop = () => {
    const { foodMenus, loading } = useFoodItemsMenu()

    const pizza = foodMenus.filter(food => food.category === "pizza");
    const salad = foodMenus.filter(food => food.category === "salad");
    const iccCream = foodMenus.filter(food => food.category === "iccCream");
    const chicken = foodMenus.filter(food => food.category === "chicken");

    const { foodName } = useParams();
    //  console.log('categorItem-->',categorItem);  

    const itemsFood = ["pizza", "salad", "iccCream", "chicken"];
    const indexOfItem = itemsFood.indexOf(foodName);
    const [tabIndex, setTabIndex] = useState(indexOfItem);


    return (
        <div className='pt-16'>
            <h4>category name: {foodName} </h4>
            <h4>tabIndex: {tabIndex} </h4>
            <h4>indexOfItem: {indexOfItem} </h4>

            <h1 className='text-2xl'>---- Add Background image || just baken now </h1>
            <h1 className='text-5xl'>Our Shop || Order page </h1>

            {/*  */}
            <div className="my-5 text-center border">
                <Tabs 
                // defaultIndex={tabIndex}
                selectedIndex={tabIndex}
                 onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>pizza</Tab>
                        <Tab>salad</Tab>
                        <Tab>iccCream</Tab>
                        <Tab>chicken</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1</h2>
                        <p className="text-2xl text-red-300">{tabIndex}</p>
                        <OrderTab items={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                        <p className="text-2xl text-red-300">{tabIndex}</p>
                        <OrderTab items={salad}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                        <p className="text-2xl text-red-300">{tabIndex}</p>
                        <OrderTab items={iccCream}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 4</h2>
                        <p className="text-2xl text-red-300">{tabIndex}</p>
                        <OrderTab items={chicken}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;