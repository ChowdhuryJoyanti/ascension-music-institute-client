import React from 'react';

const Instructors = ({item}) => {
    const { instructorName, image, email,subject } = item;
    return (
        <div className='border m-5 rounded-xl text-center'>
            <img className='w-96  h-[400px]' src={image} alt="" />
            <p>Name:{instructorName}</p>
            <p>Email:{email}</p>
          <p>Subject:{subject}</p>
          <button className="btn  btn-outline mt-2">See Class</button>
        </div>
    );
};

export default Instructors;