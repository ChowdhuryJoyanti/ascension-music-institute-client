import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import Instructor from '../Instructor/Instructor';

const PopularInstructor = () => {

    const [PopularInstructor, setPopularInstructor] = useState([]);

    useEffect(() =>{
        // fetch('popularInstractor.json')
        fetch('https://ascension-music-institute-server-chowdhuryjoyanti.vercel.app/popularInstructor')

        .then(res => res.json())
        .then(data => {
            const PopularInstructors = data.filter(item=>item.category === 'popular')
            console.log(PopularInstructors);
            setPopularInstructor(PopularInstructors)})
    },[])
    return (
        <section>
             <SectionTitle
                heading="Our Top Instructors"
                subHeading="Popular Instructors"
            
            ></SectionTitle>
              <div className='grid md:grid-cols-3 lg:grid-cols-3 border rounded-lg mt-5'>
                {
                   PopularInstructor.map(instructor => <Instructor  
                    key={instructor._id}
                    instructor={instructor}
                    
                    ></Instructor>)
                }
            </div>
        </section>
    );
};

export default PopularInstructor;
