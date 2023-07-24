import React from 'react';
import Slider from './Slider/Slider';
import About from '../About/About';
import Category from '../Category/Category';
import TeamBanner from './TeamBanner/TeamBanner';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <About></About>
            <Category></Category>
            <TeamBanner></TeamBanner>
        </div>
    );
};

export default Home;