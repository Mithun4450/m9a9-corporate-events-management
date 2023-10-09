import { NavLink } from "react-router-dom";
import { BiLogoMediumOld } from 'react-icons/bi';
import { useContext } from "react";
import { Context } from "../ContextProvider/ContextProvider";



const Navbar = () => {

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About us</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/gallery">Gallery</NavLink></li>
        
        
    </>

    const { logOut, user} = useContext(Context);

    const handleLogOut = () =>{
        logOut()
          .then()
          .catch()
    }
        
    
    return (
        <div className="navbar bg-base-100 py-4 flex flex-col md:flex-row ">
            
           
            <div className="w-3/4">
                <div className="navbar-start  font-semibold flex justify-center  items-center w-full  lg:w-1/4">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"><BiLogoMediumOld className="text-3xl"></BiLogoMediumOld><span>MM Event</span></a>
                </div>


                <div className="navbar-end hidden lg:flex justify-center font-semibold w-3/4">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLinks
                        }
                    </ul>
                </div>
            </div>
           
            
            <div className="space-x-3 font-semibold w-full flex justify-center lg:w-1/4">
                {
                    user? <>
                    <p>{user.displayName}</p>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        {
                           user.photoURL? <img src={user.photoURL} /> : <img src="/public/avater.png"/>
                        }
                        </div>
                    </label>
                    <NavLink onClick={handleLogOut}><button className="btn btn-sm btn-primary">Logout</button></NavLink>
                     </>: <>
                     <NavLink to="/login"><button className="btn btn-sm btn-primary">Login</button></NavLink>
                     <NavLink to="/register"><button className="btn btn-sm btn-primary">Register</button></NavLink>
                     </>
                    
                }
      
            </div>
        </div>
    );
};

export default Navbar;