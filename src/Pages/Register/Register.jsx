import React from 'react';
import banner from '../../assets/ohters/about-us.png'
// import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

// import { register } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from './../../Providers/AuthProvider';



const Register = () => {

    // const {createUser} = useContext(AuthContext);


    // UseTitle('Register')

    // const handleRegister = event => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { createUser } = useContext(AuthContext);


    const onSubmit = data => {

        console.log(data)
  
    createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);

        })


    };

    // event.preventDefault();
    // const form = event.target;
    // const name = form.name.value;
    // const email = form.email.value;
    // const password = form.password.value;
    // const confirmPassword = form.confirmPassword.value;
    // const photo = form.photo.value;
    // console.log(name, email, password, photo, confirmPassword);



    //  createUser(email,password)
    //  .then(result =>{
    //     const user = result.user;
    //     console.log(user);
    //  })
    //  .catch(error => console.log(error))
    // }





    return (
        <div>
            <Helmet>
                <title>Ascension Music Institute | Register</title>
            </Helmet>




            {/* <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
               
                    <div className="text-center lg:text-left">



                 <h1 className="text-5xl font-bold">Login now!</h1>
                             <img className='h-80 w-full' src={logImg} alt="" srcset="" /> 


                    </div>
                    <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div> */}




            <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">

                        <div className="hero min-h-screen">
                            <div className="hero-content flex-col ">
                                <div className="text-center lg:text-left">
                                    <h1 className="text-5xl font-bold">Register now!</h1>
                                </div>
                                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                    {/* <form onSubmit={handleRegister}className="card-body"> */}
                                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input type="text" {...register("name", { required: true })}  placeholder="name" className="input input-bordered" />
                                            {errors.name && <span className='text-red-500'>This field is required</span>}
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                            {errors.email && <span className='text-red-500'>This field is required</span>}
                                        </div>


                                        <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Password</span>
                                                </label>
                                                <input type="text" {...register("password",{ required: true,
                                                     minLength:6,
                                                      maxLength: 20 ,
                                                      pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                                      })}  placeholder="password" className="input input-bordered"  />

                                                {errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>}
                                                {errors.password?.type === ' minLength' && <p className='text-red-500'>password must be 6 character</p>}
                                                {errors.password?.type === 'maxLength' && <p className='text-red-500'>password can not be more then 20 character</p>}
                                                {errors.password?.type === 'pattern' && <p className='text-red-500'>password must have one upper case ,one lower case ,one number and a special character is required</p>}
                                            </div>







{/* 
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Password</span>
                                            </label>
                                            <input type="text" placeholder="password"
                                                {...register("password", {
                                                    required: true,
                                                    minLength: 6,
                                                    maxLength: 20,
                                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/

                                                })} name='password' className="input input-bordered" />
                                            {errors.password?.type === 'required' && <span className='text-red-600'>Password is required</span>}
                                            {errors.password?.type === 'minLength' && <span className='text-red-600'>Password must be 6 characters</span>}
                                            {errors.password?.type === 'maxLength' && <span className='text-red-600'>Password must be less then 20 characters</span>}
                                            {errors.password?.type === 'pattern' && <span className='text-red-600'>Password must have one uppercse one lowercase and one special characters characters</span>}

                                        </div> */}







                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Confirm Password</span>
                                            </label>
                                            <input type="text" {...register("confirmPassword", { required: true })}  placeholder="ConfirmPassword" className="input input-bordered" />

                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">PhotoURL</span>
                                            </label>
                                            <input type="text" {...register("photoURL")} placeholder="PhotoURL" className="input input-bordered" />
                                            <label className="label">
                                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                            </label>
                                        </div>
                                        <div className="form-control mt-6">

                                            <input className="btn btn-warning" type="submit" value="Register" />
                                        </div>
                                    </form>
                                    <p> Have an account ?<Link className='text-yellow-600' to="/login">login</Link></p>
                                    {/* </form> */}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;


