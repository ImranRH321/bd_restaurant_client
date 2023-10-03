import React from 'react';
import useFoodItemsMenu from '../../hooks/useFoodItemsMenu';
import ItemList from '../Shared/ItemLIst/ItemList';
import OurItemsMenu from '../OurItemsMenu/OurItemsMenu';
import PageRouteTitle from '../Shared/PageRouteTitle/PageRouteTitle';

import PageCover from '../Shared/PageCover/PageCover';
import commonImg from '../../assets/home/chef-special.jpg'
import banner from '../../assets/home/banner.jpg';

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
            <PageCover coverImg={banner} pageCoverTitle={'Our Menu'} color="text-warning"></PageCover>
            <br /> <br />
            <OurItemsMenu foodItems={pizza} foodTitle="pizza"></OurItemsMenu>
            <PageCover coverImg={banner} pageCoverTitle={'pizza'} color="text-warning"></PageCover>
            <OurItemsMenu foodItems={salad} foodTitle="salad"></OurItemsMenu>
            <PageCover coverImg={banner} pageCoverTitle={'iccCream'} color="text-warning"></PageCover>

            <OurItemsMenu foodItems={iccCream} foodTitle="iccCream"></OurItemsMenu>
            <PageCover coverImg={banner} pageCoverTitle={'chicken'} color="text-warning"></PageCover>
            <OurItemsMenu foodItems={chicken} foodTitle="chicken"></OurItemsMenu>

        </div>
    );
};

export default OurMenuPage;