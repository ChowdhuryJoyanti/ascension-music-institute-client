import React from 'react';
import error from '../../assets/ohters/404-drib23.gif'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <img  className="text-center mx-auto mt-10" src={error} alt="" />
            
            <Link  className="text-center mx-auto mt-5" to="/">Go to Home</Link>

        </div>
    );
};

export default Error;