import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import useClass from '../../../Hooks/useClass';
import './ManageClass.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ManageClass = () => {
  const [popularClass] = useClass();


  const [Boookings, seBoookings] = useState([])

  const navigate = useNavigate();
  const url = (`https://ascension-music-institute-server.vercel.app/popularClass`)
  useEffect(() => {
    fetch(url,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem('access-token')}`,

        },
        // body: JSON.stringify(Logged_User_for_jwt),      
      }
    )
      .then(res => res.json())
      .then(Boooking => {
        if (!Boooking.error) {
          seBoookings(Boooking)

        } else {
          navigate('/')
        }
      })
  }, [url, navigate])
  console.log(Boookings);

  const handle_Conform = (_id) => {
    fetch(`https://ascension-music-institute-server.vercel.app/popularClass/${_id}`, {
      method: "PATCH",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ status: 'confirm' })
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          //update state
          const remaining = Boookings.filter(Boooking => Boooking._id !== _id)
          const updated = Boookings.find(Boooking => Boooking._id === _id)
          updated.status = 'confirm'
          const newbookings = [updated, ...remaining]
          seBoookings(newbookings)
        }
      })
  }

  const handle_Deny = (_id) => {
    fetch(`https://ascension-music-institute-server.vercel.app/popularClass/${_id}`, {
      method: "PATCH",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ status: 'deny' })
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          //update state
          const remaining = Boookings.filter(Boooking => Boooking._id !== _id)
          const updated = Boookings.find(Boooking => Boooking._id === _id)
          updated.status = 'deny'
          const newbookings = [updated, ...remaining]
          seBoookings(newbookings)
        }
      })
  }






  return (
    // <div className='w-full'>
    //   <SectionTitle
    //     heading="Manage All CLass"></SectionTitle>
    //   <div className="overflow-x-auto">
    //     <table className="table">
    //       {/* head */}
    //       <thead>
    //         <tr>
    //           <th>
    //             <label>
    //               <input type="checkbox" className="checkbox" />
    //             </label>
    //           </th>
    //           <th>Name</th>
    //           <th>Job</th>
    //           <th>Favorite Color</th>
    //           <th></th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {/* row 1 */}
    //         <tr>
    //           <th>
    //             <label>
    //               <input type="checkbox" className="checkbox" />
    //             </label>
    //           </th>
    //           <td>
    //             <div className="flex items-center space-x-3">
    //               <div className="avatar">
    //                 <div className="mask mask-squircle w-12 h-12">
    //                   <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
    //                 </div>
    //               </div>
    //               <div>
    //                 <div className="font-bold">Hart Hagerty</div>
    //                 <div className="text-sm opacity-50">United States</div>
    //               </div>
    //             </div>
    //           </td>
    //           <td>
    //             Zemlak, Daniel and Leannon
    //             <br />
    //             <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
    //           </td>
    //           <td>Purple</td>
    //           <th>
    //             <button className="btn btn-ghost btn-xs">details</button>
    //           </th>
    //         </tr>

    //       </tbody>
    //       {/* foot */}


    //     </table>
    //   </div>
    // </div>


    <table className='mt-[em]'>
      <caption className='bg-pink-400 clipo7'>---Manage Classes---</caption>
      <thead>
        <tr>
          <th className='bg-teal-400 rounded-lg clipo6' scope="col">Picture</th>
          <th className='bg-teal-400 rounded-lg clipo6' scope="col">Name of the Classes</th>
          <th className='bg-teal-400 rounded-lg clipo6' scope="col">Instructor name</th>
          <th className='bg-teal-400 rounded-lg clipo6' scope="col">Instructor email</th>
          <th className='bg-teal-400 rounded-lg clipo6' scope="col">Available seats</th>
          <th className='bg-teal-400 rounded-lg clipo6' scope="col">Price</th>
          <th className='bg-teal-400 rounded-lg clipo6' scope="col">Overall Status</th>
          <th className='bg-teal-400 rounded-lg clipo6' scope="col">Pending For Approval</th>
          <th className='bg-teal-400 rounded-lg clipo6' scope="col">Pending  deny</th>
          {/* <th className='bg-teal-400 rounded-lg clipo6' scope="col">Send Feedback</th> */}
        </tr>
      </thead>
      <tbody>
        {
          Boookings.map(instructor => <tr key={instructor._id}>
            <td data-label="Class Image"><img className='w-[70px] h-[70px] rounded-lg border-2 border-purple-400 shadow-lg shadow-purple-200' src={instructor.image} alt="" /></td>
            <td data-label="Class name">{instructor.name}</td>
            <td data-label="Instructor name">{instructor.instructor}</td>
            <td className='text-[.8em]' data-label="Instructor email">{instructor.instructor_email}</td>
            <td data-label="Available seats">{instructor.available_seats}</td>
            <td data-label="Price">{instructor.price}$</td>
            <td data-label="Overall Status">
              {
                instructor.status === 'confirm' || instructor.status === 'deny' ? <span className='text-gray-400'>Process Complete</span> :
                  <div className="text-red-500">Pending...</div>
              }
            </td>
            <td data-label="Pending For Conformation">
              {
                instructor.status === 'deny' ? <span className='text-gray-400'>Approve...</span> :

                  instructor.status === 'confirm' ? <span className='text-green-500'>Approved</span> :
                    <div onClick={() => { handle_Conform(instructor._id) }} className="text-red-500 cursor-pointer">Approve...</div>

              }
            </td>
            <td data-label="Pending For Deny">
              {
                instructor.status === 'confirm' ? <span className='text-gray-400'>Deny...</span> :

                  instructor.status === 'deny' ? <span className='text-green-500'>Denied</span> :
                    <div onClick={() => { handle_Deny(instructor._id) }} className="text-red-500 cursor-pointer">Deny...</div>

              }

            </td>
            {/* <Link to={`/Feed_Back/${instructor._id}`}><td className='flex justify-center items-center pt-6 cursor-pointer ' data-label="Send Feedback" ><p><MdEditSquare className='bg-blue-400 text-[1.4em]'></MdEditSquare></p></td></Link> */}
            {/* <Link to = {`/Chackout/${Survice._id}`}><button className="btn btn-primary">Book Now</button></Link> */}

          </tr>)
        }
      </tbody>
    </table>














  );
};

export default ManageClass;