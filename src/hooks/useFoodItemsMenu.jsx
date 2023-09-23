import React, { useEffect, useState } from 'react';
import axios from 'axios';
const useFoodItemsMenu = () => {

    const [foodMenus, setFoodMenus] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => { 
        axios.get('http://localhost:5000/foodMenu')
            .then(function (response) {
                // handle success
                setFoodMenus(response.data);
                setLoading(false)
            })

    }, [])
    return { foodMenus, loading }
};

export default useFoodItemsMenu;