import React from 'react';
import useFoodItemsMenu from '../../../hooks/useFoodItemsMenu';

const PropularChicken = () => {
    const { foodMenus, loading } = useFoodItemsMenu()

    const chickens = foodMenus.filter(food => food.category === "chicken");

    if (loading) {
        return <h1>loading Propular chicken food list data............</h1>
    }
    return (
        <div>
            <h1 className="text-3xl my-6 text-center font-semibold">Propular Chicken</h1>
            {/* TODO: PROPULAR SECTION HEADING || HELMENT TITLE */}
            <div className='grid md:grid-cols-2 gap-x-10'>

                {/* under map  */}
                {
                    chickens.map(food => {
                        const { name, price, image, recipe } = food;
                        return <div className="mt-5 border flex gap-4 py-2">
                            <img className='w-[118px] h-[104px]' src={image} alt="nofound" />
                            <div>
                                <div className="flex">
                                    <div className='flex-grow'>
                                        <h4 className='font-semibold '>{name}...........</h4>
                                    </div>
                                    <p className='font-semibold me-3 text-md text-warning'>${price}</p>
                                </div>
                                <p>{recipe.slice(0, 83)}</p>
                            </div>
                        </div>
                    }) 
                }
            </div>
            {/* Popular chicken button naviage /our menu page  */}
            <div className="flex justify-center">
                <button className='btn  bg-black text-white hover:bg-blue-700   border-none border-b-3  mt-4'>Full Menu</button>
            </div>
        </div>
    );
};

export default PropularChicken;