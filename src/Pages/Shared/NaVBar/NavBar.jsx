import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/ohters/logo2.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import pImage from '../../../assets/ohters/user-2.png'
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../../Hooks/useCart';


const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart()

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    const navOptions =
        <>
            <li> <NavLink to="/">Home</NavLink></li>
            <li> <NavLink to="/classes">Classes</NavLink></li>
            <li> <NavLink to="/instructors">Instructors</NavLink></li>
            <li> <NavLink to="/dashboard">Dashboard</NavLink></li>
            <li>
                <NavLink to="/dashboard/mycart">
                    <button className="btn">
                 <FaShoppingCart></FaShoppingCart>
                        <div className="badge badge-secondary">+{cart?.length || 0}</div>
                    </button>
                   
                </NavLink>


            </li>


            {

                user ? <>
                    <span>{user?.displayName}</span>
                    <img className="h-[50px] w-[50px] rounded-xl p-2" src={user?.photoURL} alt="" />
                    <button onClick={handleLogOut} className="btn btn-active" href="/login">Logout</button>

                </> : <>

                    <li> <NavLink to="/login">Log In</NavLink></li>

                </>

            }
        </>




    return (
        <div>
            <div className="navbar fixed z-10  bg-opacity-30 bg-slate-900  text-white max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <img className='w-20 h-10 rounded border' src={logo} alt="" />
                    <a className="btn btn-ghost normal-case text-xl">Ascension Music Institute</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Login</a>


                    {user &&
                        <img className="w-10 h-10 rounded-full" src={pImage} />
                    }

                    {user ?
                         <a className="btn">Log in</a>
                        <button onClick={handleLogOut} className="btn btn-active" href="/login">Logout</button> :
                        <Link to="/login">
                            <button className="btn btn-active" href="/login">Login</button>

                        </Link>
                    }

                </div> */}
            </div>
        </div>
    );
};

export default NavBar;