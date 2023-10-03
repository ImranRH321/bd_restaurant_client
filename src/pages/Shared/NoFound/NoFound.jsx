import React from 'react';
import noImg from '../../../assets/404.gif'
import { useLocation } from 'react-router-dom';

const NoFound = () => {
    /*TODO:  conditional header footer not exist page  */
    return (
        <div>
            <img src={noImg} alt="no img" />
        </div>
    );
};

export default NoFound;
