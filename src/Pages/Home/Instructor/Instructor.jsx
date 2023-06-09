import React from 'react';

const Instructor = ({ instructor }) => {
    const { image, instructorName, subject } = instructor;
    return (
        <div className=''>
            <div className='border rounded-lg'>
                <img className=' class-image ' src={image} alt="" />
                <div className='text-center text-xl text-white mt-5 mb-4'>
                    <h3> Instructor Name:{instructorName}</h3>
                    <p> subject:{subject}</p>
                    <button className="btn  btn-outline mt-2">View Details</button>
                   
                </div>

            </div>
        </div>
    );
};

export default Instructor;