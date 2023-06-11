import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import CoverBanner from '../../Shared/coverBanner/CoverBanner';

const AllInstructors = () => {

    const [allInstructors, setAllInstructors] = useState([]);
    f

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
            <CoverBanner img={classImg} title={'Our All Classes'}></CoverBanner>

        </div>
    );
};

export default AllInstructors;