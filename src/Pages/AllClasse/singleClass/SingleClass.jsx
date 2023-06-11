import React from 'react';
import ClassItem from '../../Home/ClassItem/ClassItem';
// import React, { useRef, useState } from "react";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/grid";
// import "swiper/css/pagination";



// import required modules
import { Grid, Pagination } from "swiper";


const SingleClass = ({ item }) => {
    const { instrumentName, image, price, availableSeats } = item;
    return (
        <div>

        {/* // <div className='grid md:grid-cols-3 lg:grid-cols-3 border rounded-lg'>
        //     <p>{instrumentName}</p>
        //     <img src={image} alt="" /> */}


            <div className="hero mt-10 bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl h-48 w-96" />
                    <div>
                        <h1 className="text-5xl font-bold">ClassName:{instrumentName}</h1>
                        <p>{price}</p>
                        <p>{availableSeats}</p>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-warning text-center ">View Details</button>
                    </div>
                </div>
            </div>



            {/* 

 <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='grid grid-cols-3' >  <img src={image} alt="" /></SwiperSlide> 
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}











        </div>
    );
};

export default SingleClass;