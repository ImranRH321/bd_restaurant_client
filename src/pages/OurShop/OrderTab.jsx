import React from 'react';
import FoodCard from './FoodCard';
import useFoodItemsMenu from '../../hooks/useFoodItemsMenu';

const OrderTab = ({ items }) => {

    return (
        <div className='mt-8'>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5'>
                {
                    items.slice(0, 4).map(itemsFood => <FoodCard key={itemsFood._id} itemsFood={itemsFood}></FoodCard>)

                }
            </div>
        </div>
    );
};

export default OrderTab;

