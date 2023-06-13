import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../Hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';

const MyCart = () => {
    const [cart] = useCart();
    console.log(cart);
    const total  = cart.reduce((sum,item) => item.price + sum,0)

    return (
        <div>
               <Helmet>
                <title>Ascension Music Institute | MY cart</title>
            </Helmet>
           <div className='uppercase font-bold h-10 flex justify-evenly items-center'>
            <h3 className="text-3xl px-3">
                Total Items:{cart.length}
            </h3>
            <h3 className="text-3xl">
                Total Price:${total}
            </h3>
            <button className="btn btn-outline btn-warning">Pay</button>
           </div>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
            #
        </th>
        <th>image</th>
        <th>Class</th>
       
        <th>Price</th>
        <th>Available seats</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        cart.map((item,index) => <tr 
            key={item._id}

        >
            <td>
              {index + 1}
            </td>
            <td>
            
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>

                {/* <div>
                  <div className="font-bold">Hart Hagerty</div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
           */}
            </td>
            <td>
                {item.instrumentName}
            </td>
            <td className='text-end'>   $  {item.price}</td>
            <td>     {item.availableSeats}</td>
            <td>
              <button className="btn btn-ghost btn-lg bg-red-400 text-white"><FaTrashAlt></FaTrashAlt></button>
            </td>
          </tr>)
      }
      
    
    </tbody>
   
  
    
  </table>
</div>
        </div>
    );
};

export default MyCart;