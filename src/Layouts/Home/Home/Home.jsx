import React from 'react';
import Slider from './Slider/Slider';
import About from '../About/About';
import Category from '../Category/Category';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <About></About>
            <Category></Category>
        </div>
    );
};

export default Home;