import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarOne from '../Home/NavbarOne/NavbarOne';

const Main = () => {
    return (
        <div>
            <NavbarOne></NavbarOne>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;