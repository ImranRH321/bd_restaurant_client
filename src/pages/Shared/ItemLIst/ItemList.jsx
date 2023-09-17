import React from 'react';

const ItemList = ({ items }) => {
    const { name, image, recipe, price } = items;
    // console.log(items);
    return (
        <div className="mt-5 border flex gap-4 py-2">
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
    );
};

export default ItemList;