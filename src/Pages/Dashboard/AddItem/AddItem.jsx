import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import Instructor from './../../Home/Instructor/Instructor';
import { useForm } from 'react-hook-form';
// import useAxiosSecure from './../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2'
import useAxiosSecure from '../../../Hooks/useAxiosSecure';


const img_hosting_token = import.meta.env.VITE_Image_upload_token;
const AddItem = () => {


    const [axiosSecure] = useAxiosSecure()


    const { register, handleSubmit, formState: { errors } } = useForm();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {
        console.log(data)


        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'post',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                const imgUrl = imgResponse.data.display_url;
                const { InstructorName, availableSeats,
                    instrumentName, price, image, email } = data;
                const newClass = { instrumentName, InstructorName, price, availableSeats, image, email, image: imgUrl };

                console.log(newClass);
                axiosSecure.post('/popularClass', newClass)
                    .then(data => {
                        console.log('after posting new class', data.data);
                        if (data.data.insertedId) {

                            Swal
                            .fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Your work has been saved',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })

            })
    };
    console.log(errors);
    console.log(img_hosting_token);




    return (
        <div className='w-full'>
            <SectionTitle
                heading="Add an Item"
                subHeading="Our Famous Work"

            ></SectionTitle>

            {/* <form>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Class name</span>
                    </label>
                    <input type="text" placeholder="Class name" className="input input-bordered w-full max-w-xs" />
                    
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Instructor name</span>
                    </label>
                    <input type="text" placeholder="Instructor name" className="input input-bordered w-full max-w-xs" />
                    
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Instructor  Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered w-full max-w-xs" />
                    
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" placeholder="price" className="input input-bordered w-full max-w-xs" />
                    
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Available Seats</span>
                    </label>
                    <input type="number" placeholder="Available Seats" className="input input-bordered w-full max-w-xs" />
                    <button>Add Class</button>
                </div>

            </form> */}

            <form onSubmit={handleSubmit(onSubmit)} className='px-20'>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Class name</span>
                    </label>
                    <input type="text" placeholder="Class name"
                        {...register("instrumentName", { required: true })}
                        className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Instructor name</span>
                    </label>
                    <input type="text" {...register("InstructorName", { required: true })} placeholder="Instructor name" className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Instructor  Email</span>
                    </label>
                    <input type="email"
                        {...register("email", { required: true })}
                        placeholder="email" className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number"
                        {...register("price", { required: true })}
                        placeholder="price" className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Available Seats</span>
                    </label>
                    <input type="number"
                        {...register("availableSeats", { required: true })}
                        placeholder="Available Seats" className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Class Image</span>
                    </label>
                    <input type="file"   {...register("image", { required: true })} className="file-input file-input-bordered file-input-secondary w-full max-w-xs" />

                </div>
                <div className='flex mt-5 py-5'>
                    {/* <button className="btn">Button</button> */}
                    <button className="btn btn-neutral">Approved</button>
                    <button className="btn btn-primary">Deny</button>
                    <button className="btn btn-secondary">Feedback</button>

                </div>
                <input className="btn btn-secondary mt-5 py-4" type="submit" value="Add Class" />
            </form>




            {/* When creating a class on the database, the value of the status field will be pending.
            Class Image, Class name, Instructor name, Instructor email, Available seats, Price,
            Status(pending/approved/denied) 3 buttons( Approve, Deny and send feedback). */}
        </div>
    );
};

export default AddItem;