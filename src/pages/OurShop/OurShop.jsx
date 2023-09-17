import React from 'react';
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

    const { categoryName: foodName } = useParams();
    //  console.log('categorItem-->',categorItem);  


    return (
        <div className='pt-16'>
            <h1 className='text-5xl'>{foodName} ---- Add Background image || just baken now </h1>
            <h1 className='text-5xl'>Our Shop || Order page </h1>

            {/*  */}
            <div className="my-5 text-center border">
                <Tabs>
                    <TabList>
                        <Tab>pizza</Tab>
                        <Tab>salad</Tab>
                        <Tab>iccCream</Tab>
                        <Tab>chicken</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1</h2>
                        <OrderTab items={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                        <OrderTab items={salad}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                        <OrderTab items={iccCream}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 4</h2>
                        <OrderTab items={chicken}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;