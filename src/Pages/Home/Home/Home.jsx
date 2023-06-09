import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import AboutUs from '../AboutUs/AboutUs';

const Home = () => {
   
    return (
        <div>
           <Banner></Banner>
           <PopularClass></PopularClass>
           <PopularInstructor></PopularInstructor>
           <AboutUs></AboutUs>
        </div>
    );
};

export default Home;