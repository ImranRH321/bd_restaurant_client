import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import NavBar from '../pages/Shared/NavBar/NavBar';

const Main = () => {
    const location = useLocation();
    const HeadToFooter = location.pathname.includes('/login') || location.pathname.includes('/register')
    return (
        <div className='m-0 p-0'>
            {HeadToFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            {HeadToFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;