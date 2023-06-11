import React from 'react';
import { Helmet } from 'react-helmet-async';
import CoverBanner from '../../Shared/coverBanner/CoverBanner';
// import  classImg from '../../assets/banner/banner10.jpg';
// import useClass from '../../../Hooks/useClass';
import classImg  from '../../../assets/banner/banner10.jpg';
import { useState } from 'react';

import { useEffect } from 'react';
import SingleClass from '../singleClass/SingleClass';




const AllClasses = () => {
    // const [popularClass] = useClass();
const [allClasses,setAllClasses] = useState([]);


        useEffect(() =>{
        fetch('popularClass.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setAllClasses(data);
           
          })
    },[])

    return (
        <div>
            <Helmet>
                <title>Ascension Music Institute | AllClasses</title>
            </Helmet>
        <CoverBanner img={classImg} title={'Our All Classes'}></CoverBanner>
         {/* <img src={classImg} alt="" />       */}
          
        <div>
            {
            
              allClasses.map(item => <SingleClass
                    key={item._id}
                    item={item}
              
              ></SingleClass>)
            }
        </div>




        </div>
    );
};

export default AllClasses;