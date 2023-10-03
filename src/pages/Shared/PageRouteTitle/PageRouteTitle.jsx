import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageRouteTitle = ({pageTitle}) => {
    return (
        <Helmet>
            <title>Resturent || {pageTitle}</title>
            <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
    );
};

export default PageRouteTitle;