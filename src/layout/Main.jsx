import React from 'react';
import {Outlet} from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <h1>main page</h1>
            <Footer></Footer>
        </div>
    );
};

export default Main;