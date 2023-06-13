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
// import { Grid, Pagination } from "swiper";
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';


const SingleClass = ({ item }) => {
  const { instrumentName, image, price, availableSeats,_id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();




  const handleSelect = item => {
    console.log(item);
    if (user && user.email) {
 
      const cartItem = {classItemId:_id,instrumentName,image,price,availableSeats,email:user.email}
      fetch('http://localhost:5000/carts',{
            method:'POST',
            headers: {
              'content-type': 'application/json'
            },
            body:JSON.stringify(cartItem)
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
             
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500
            })
          }
          else{
            Swal.fire({
              title: 'Please Log in to select the class',
         
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Login now'
            }).then((result) => {
              if (result.isConfirmed) {
               navigate('/login',{state :{from: location}})
              }
            })
          }
        })

    }
  }
  return (
    <div>

      {/* // <div className='grid md:grid-cols-3 lg:grid-cols-3 border rounded-lg'>
        //     <p>{instrumentName}</p>
        //     <img src={image} alt="" /> */}


      <div className="hero mt-10 bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl h-60 w-96" />
          <div>
            <h1 className="text-5xl font-bold">ClassName:{instrumentName}</h1>
            <p className='text-3xl'> Price:${price}</p>
            <p className='text-3xl'>Available Seats:{availableSeats}</p>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button onClick={() => handleSelect(item)} className="btn btn-warning text-center ">Select</button>
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