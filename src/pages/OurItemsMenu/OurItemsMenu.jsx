import React from 'react';
import ItemList from '../Shared/ItemLIst/ItemList';
import { Link } from 'react-router-dom';

const OurItemsMenu = ({ foodItems, foodTitle }) => {

    return (
        <div>
            <h1 className='text-center text-2xl text-purple-400 font-serif   font-semibold'>{foodTitle} || category </h1>
            <div className='grid md:grid-cols-2 gap-x-10'>
                {
                    foodItems.slice(0, 4).map(items => <ItemList key={items._id} items={items}></ItemList>)
                }
            </div>
            <div className="flex justify-center">
                <Link to={`/ourShop/categoryName/${foodTitle}`}>
                    <button className="btn btn-outline my-8 px-7">ORDER YOUR FAVOURITE FOOD </button>
                </Link>
            </div>

        </div>
    );
};

export default OurItemsMenu;