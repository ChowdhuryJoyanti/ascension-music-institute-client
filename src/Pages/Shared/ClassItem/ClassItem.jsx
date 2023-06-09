import React from 'react';
import './ClassItem.css'

const ClassItem = ({ clas }) => {
    const { image, instrumentName, price, category } = clas;
    return (
        <div className='border rounded-lg'>
            <img className=' class-image ' src={image} alt="" />
            <div className='text-center text-3x text-amber-800'>
                <h3> Instrument Name:{instrumentName}</h3>
                <p> Price:{price}</p>
            </div>

        </div>

        // <section>

        //     <div className="card bg-base-100 shadow-xl grid grid-rows-2">
        //         <figure><img className='class-image' src={image} alt="Shoes" /></figure>
        //         <div className="card-body">
        //             <h2 className="card-title">Shoes!</h2>
        //             <p>If a dog chews shoes whose shoes does he choose?</p>
        //             <div className="card-actions justify-end">
        //                 <button className="btn btn-primary">Buy Now</button>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    


    );
};

export default ClassItem;