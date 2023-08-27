import React from 'react';
import {Outlet} from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import NavBar from '../pages/Shared/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <h1>main page</h1>
            <Footer></Footer>
        </div>
    );
};

export default Main;