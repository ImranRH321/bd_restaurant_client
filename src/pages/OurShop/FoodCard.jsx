import React from 'react';

const FoodCard = ({ itemsFood }) => {
    const { name, image, recipe
    } = itemsFood;



    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">

                    <div className="badge badge-secondary ">{name}</div>
                </h2>
                <p className='text-start'>{recipe?.slice(0, 55)}</p>
            </div>
            <button className="btn btn-outline btn-secondary btn-md w-[150px] mx-auto mb-2">Add Card</button>
        </div>
    );
};

export default FoodCard;