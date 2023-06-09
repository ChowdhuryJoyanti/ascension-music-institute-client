import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../assets/banner/banner1.jpg';
import banner2 from '../../../assets/banner/banner2.jpg';
import banner3 from '../../../assets/banner/banner3.jpg';
import banner4 from '../../../assets/banner/banner8.jpg';
import banner5 from '../../../assets/banner/banner9.jpg';
import banner6 from '../../../assets/banner/banner1.jpg';


const Banner = () => {

    return (
        <div>
              <Carousel>
                <div>
                    <img src={banner1} />
                <p>hi</p>
                    
                </div>
                <div>
                    <img src={banner2} />
                    
                </div>
                <div>
                    <img src={banner3} />
                    
                </div>
                <div>
                    <img src={banner4} />
                    
                </div>
                <div>
                    <img src={banner5} />
                    
                </div>
                <div>
                    <img src={banner6} />
                    
                </div>
              
            </Carousel>



        </div>
    );
};

export default Banner;