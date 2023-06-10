import React from 'react';
import { Helmet } from 'react-helmet-async';
import CoverBanner from '../Shared/coverBanner/CoverBanner';
import  classImg from '../../assets/banner/banner10.jpg'
const AllClasses = () => {
    return (
        <div>
            <Helmet>
                <title>Ascension Music Institute | AllClasses</title>
            </Helmet>
        <CoverBanner img={classImg} title={'Our All Classes'}></CoverBanner>
        </div>
    );
};

export default AllClasses;