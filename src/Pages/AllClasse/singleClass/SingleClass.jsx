import React from 'react';
import ClassItem from '../../Home/ClassItem/ClassItem';

const SingleClass = ({item}) => {
    const {instrumentName,image,price,availableSeats} =item;
    return (
        <div>
            <p>{instrumentName}</p>
         

        </div>
    );
};

export default SingleClass;