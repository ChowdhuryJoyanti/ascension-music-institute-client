import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
// import { FaTrashAlt } from 'react-icons/fa';
import Instructor from './../../Home/Instructor/Instructor';
// import { Fade } from "react-awesome-reveal";
import Swal from 'sweetalert2';

const ALLUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://ascension-music-institute-server-chowdhuryjoyanti.vercel.app/users')
        return res.json();

    })


    const handleMakeAdmin = user => {
            fetch(`https://ascension-music-institute-server-chowdhuryjoyanti.vercel.app/users/admin/${user._id}`,{

            method: 'PATCH'

            })
            .then(res => res.json())
            .then(data  =>{
                console.log(data);
                if(data.modifiedCount){
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now`,
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            } )
    }

    // const handleDelete = user => {

    // }
    return (
        <div className='w-full'>
            <Helmet>
                <title>Ascension Music Institute | ALL users</title>
            </Helmet>
            <h3 className="text-4xl font-bold">Total User{users.length}</h3>


            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            users.map((user, index) => <tr
                                key={user._id}

                            >
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>Instructor</td>
                                <td>
                                    {
                                        user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)} className="btn btn-secondary btn-lg text-white">Make Admin</button>
                                    }
                                </td>

                                {/* <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-lg bg-red-400 text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td> */}
                                <td>
                                    <button className="btn btn-primary btn-lg  text-white">Make Instructor</button>
                                </td>
                                {/* <td>
                                    <button className="btn btn-secondary btn-lg text-white">Make Admin</button>
                                </td> */}
                           
                            </tr>)

                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ALLUsers;