import React from 'react';
// import about from '../../../assets/ohters/203305511_4081888735226811_5051431810529075513_n.jpg'
import about from '../../../assets/ohters/R.jpeg'
import SectionTitle from '../../../Components/SectionTitle';

const AboutUs = () => {
    return (
        <div>
            <SectionTitle
                heading="About Us"
                subHeading="Our Famous Work"

            ></SectionTitle>
            {/* <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={about} className='w-[900px] h-[400px]' alt="Album" /> </figure>
                <div className="card-body">
                    <h2 className="card-title">About Us!</h2>
                    <p className='text-2xl'>‘Organization Name’

                        Mandolin and acoustic guitar pro The Acoustic Music (‘Company Name’) in Brighton, UK,
                        was built up by me, Owner Name, in 2001.

                        I offer the world’s best carefully assembled acoustic guitars and mandolins,
                        for the most part, from the USA and Canada. ‘Organization Name’ speaks to more
                        than fifty of the absolute best North American guitar and mandolin luthiers,
                      

                      </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div> */}



            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={about} className='h-[600px] w-[700px]' alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-5xl mt-5  text-amber-500 ">Ascension Music Institute!</h2>
                    <p className='text-xl mt-8 '> <span className=' '>ascension-music-institute</span> <br />

                        Mandolin and acoustic guitar pro The Acoustic Music <br></br> (‘Company Name’) in Brighton, UK,
                        was built up by me, Owner Name, in 2001.<br></br> 
                        I offer the world’s best carefully assembled acoustic guitars<br></br>  and mandolins, 
                        for the most part, from the USA and Canada. ‘Organization Name’<br></br>  speaks to more 
                        than fifty of the absolute best North American<br></br>  guitar and mandolin luthiers, 
                      

                      
                      

                      </p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-warning mt-2">About US</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;