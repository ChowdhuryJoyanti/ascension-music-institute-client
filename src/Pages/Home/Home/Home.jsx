import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import AboutUs from '../AboutUs/AboutUs';
import { Helmet } from 'react-helmet-async';

const Home = () => {
   
    return (
        <div>
             <Helmet>
                <title>Ascension Music Institute | Home</title>
            </Helmet>
           <Banner></Banner>
           <PopularClass></PopularClass>
           <PopularInstructor></PopularInstructor>
           <AboutUs></AboutUs>
        </div>
    );
};

export default Home;