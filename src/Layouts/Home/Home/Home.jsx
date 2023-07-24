import React from 'react';
import Slider from '../Slider/Slider';
import About from '../About/About';
import Category from '../Category/Category';
import TeamBanner from '../TeamBanner/TeamBanner';
import TeamCards from '../TeamCards/TeamCards';
import LatestNews from '../LatestNews/LatestNews';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <About></About>
            <Category></Category>
            <TeamBanner></TeamBanner>
            <TeamCards></TeamCards>
            <LatestNews></LatestNews>
        </div>
    );
};

export default Home;