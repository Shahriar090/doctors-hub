import React from 'react';
import Slider from '../Slider/Slider';
import About from '../About/About';
import Category from '../Category/Category';
import TeamBanner from '../TeamBanner/TeamBanner';
import TeamCards from '../TeamCards/TeamCards';
import LatestNews from '../LatestNews/LatestNews';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <About></About>
            <Category></Category>
            <TeamBanner></TeamBanner>
            <TeamCards></TeamCards>
            <LatestNews></LatestNews>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;