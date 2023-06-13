import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../Hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyCart = () => {
    const [cart ,refetch] = useCart();
    console.log(cart);
    const total  = cart.reduce((sum,item) => item.price + sum,0)

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/carts/${item._id}`,{
                    method:'DELETE'
                })
                .then(res => res.json())
                .then(data =>{
                  if(data.deletedCount > 0){
                        refetch();

                    Swal.fire(
                      'Deleted!',
                      'Your file has been deleted.',
                      'success'
                    )
                  }
                })
           
            }
          })
    }


    return (
        <div className='w-full'>
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
              <button  className="btn btn-ghost btn-lg bg-amber-400 text-white">Pay</button>
            </td>
           
            <td>
              <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-lg bg-red-400 text-white"><FaTrashAlt></FaTrashAlt></button>
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