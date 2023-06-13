import React, { useContext, useState } from 'react';
import logImg from '../../assets/ohters/OIP.jpeg'

import { AuthContext } from '../../Providers/AuthProvider';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import app from '../../firebase/firebase.config';

const Login = () => {




    const auth = getAuth(app);
    const [users,setUsers]  = useState()
    const [error,setError] = useState('');





    const { signIn, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login', location);
    // UseTitle('Login')
    const from = location?.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();







    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        if (!password === password) {
            setError('password did not matched')
            return setError();
        }

        console.log(email, password,);
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);


                Swal.fire({
                    title: 'User Log In Successfully',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })

                navigate(from, { replace: true });
            })
            .catch(error => console.log(error));
    }



    const handleGoogleSignIn = event => {
        event.preventDefault();
          signInWithPopup(auth,googleProvider)
          .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUsers(loggedInUser)
            navigate(from,{replace:true})
          })
          .catch(error =>{
            console.log('error',error.message);
          })
      }






    // const handleGoogleSignIn = event => {
    //     event.preventDefault();
    //       signInWithPopup(auth,googleProvider)
    //       .then(result => {
    //         const loggedInUser = result.user;
    //         console.log(loggedInUser);
    //         setUsers(loggedInUser)
    //         Navigate(from,{replace:true})
    //       })
    //       .catch(error =>{
    //         console.log('error',error.message);
    //       })
    // }

    return (
        <div>
            {/* <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
               
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                             <img className='h-80 w-full' src={logImg} alt="" srcset="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
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
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


            <Helmet>
                <title>Ascension Music Institute | Login</title>
            </Helmet>


            <div className="hero min-h-screen" style={{ backgroundImage: `url('../../../src/assets/banner4.jpg')` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">

                        <div className="hero min-h-screen">
                            <div className="hero-content flex-col ">
                                <div className="text-center lg:text-left">
                                    <h1 className="text-5xl font-bold">Login now!</h1>
                                </div>
                                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                    <form onSubmit={handleLogIn} className="card-body">
                                        {/* <form > */}
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Email</span>
                                                </label>
                                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Password</span>
                                                </label>
                                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                                <label className="label">
                                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                                </label>
                                            </div>
                                            <div className="form-control mt-6">

                                                <input className="btn btn-warning" type="submit" value="Login" />
                                            </div>

                                            <button onClick={handleGoogleSignIn} className="btn btn-outline mt-5">Google SignIn</button>
                                        </form>
                                        <p>Don't Have an account <Link className='text-yellow-600' to="/register">Register</Link></p>
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

export default Login;



