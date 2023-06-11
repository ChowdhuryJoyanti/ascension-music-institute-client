import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import CoverBanner from '../../Shared/coverBanner/CoverBanner';
import Instructors from '../Instructors/Instructors';
import classImg  from '../../../assets/banner/banner1.jpg';
const AllInstructors = () => {

    const [allInstructors, setAllInstructors] = useState([]);
    

    useEffect(() => {
        fetch('popularInstractor.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllInstructors(data);

            })
    }, [])

    return (
        <div>

            <Helmet>
                <title>Ascension Music Institute | AllClasses</title>
            </Helmet>
            <CoverBanner img={classImg} title={'Our All Instructors'}></CoverBanner>
            <div className='grid md:grid-cols-3 lg:grid-cols-3 rounded-lg'>
            {
            
            allInstructors.map(item => <Instructors
                    key={item._id}
                    item={item}
              
              ></Instructors>)
            }
        </div>

        </div>
    );
};

export default AllInstructors;