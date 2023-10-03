import React from 'react';
import useFoodItemsMenu from '../../hooks/useFoodItemsMenu';
import ItemList from '../Shared/ItemLIst/ItemList';
import OurItemsMenu from '../OurItemsMenu/OurItemsMenu';
import PageRouteTitle from '../Shared/PageRouteTitle/PageRouteTitle';

const OurMenuPage = () => {
    const { foodMenus, loading } = useFoodItemsMenu()

    const pizza = foodMenus.filter(food => food.category === "pizza");
    const salad = foodMenus.filter(food => food.category === "salad");
    const iccCream = foodMenus.filter(food => food.category === "iccCream");
    const chicken = foodMenus.filter(food => food.category === "chicken");
    // if (loading) {
    //     return <h1 className='pt-10 text-4xl text-center text-green-400'>loading category food list data............</h1>
    // }
    return (
        <div className='pt-16'>
            <PageRouteTitle pageTitle={'OurMenuPage'}></PageRouteTitle>
            <h2>backgroun image our menu page </h2>
            <div className="text-3xl">Our menu</div>
            <OurItemsMenu foodItems={pizza} foodTitle="pizza"></OurItemsMenu>
            <OurItemsMenu foodItems={salad} foodTitle="salad"></OurItemsMenu>
            <OurItemsMenu foodItems={iccCream} foodTitle="iccCream"></OurItemsMenu>
            <OurItemsMenu foodItems={chicken} foodTitle="chicken"></OurItemsMenu>

        </div>
    );
};

export default OurMenuPage;