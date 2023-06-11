import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='md:w-4/12 mx-auto text-center my-8'>
            <p className='text-yellow-700 mb-3'>*****{subHeading}*****</p>
            <h3 className='text-5xl'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;