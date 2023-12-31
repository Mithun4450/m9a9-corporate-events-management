import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../ContextProvider/ContextProvider";
import { FcGoogle  } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import swal from 'sweetalert';

const Login = () => {

    const [loginError, setLoginError] = useState('')
    const {loginWithEmailPassword, loginWithGoogle, loginWithGithub} = useContext(Context);
    const navigate = useNavigate()
    const location = useLocation();

    const handleLogin = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

       

        loginWithEmailPassword(email, password)
            .then(result =>{
                console.log(result.user);
                e.target.reset();
                swal("Good job!", "You have successfully logged in!", "success");
                navigate(location?.state? location.state : "/");
            })
            .catch(error =>{
                console.error(error)
                setLoginError(error.message)
            })
        
        
    }

    const handleGoogleLogin = () =>{
        loginWithGoogle()
        .then(result =>{
            console.log(result.user);
            swal("Good job!", "You have successfully logged in!", "success");
            navigate(location?.state? location.state : "/");
        })
        .catch(error =>{
            console.error(error)
        })
    }

    const handleGithubLogin = () =>{
        loginWithGithub()
        .then(result =>{
            console.log(result.user);
            swal("Good job!", "You have successfully logged in!", "success");
            navigate(location?.state? location.state : "/");
        })
        .catch(error =>{
            console.error(error)
        })
    }


    return (
        <div className="hero min-h-screen bg-base-200 my-9">
            <div className="hero-content flex flex-col lg:flex-row ">
                <div className="mr-8"> 
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold mb-5">Please login here!</h1>
                        
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                        
                            <div className="form-control">
                                <label className="label">
                                <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                                {
                                    loginError && <p className="text-red-600 pt-4">{loginError}</p>

                                }
                                        
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>

                           
                        </form>

                        <p className="text-center pb-10">Are you new here? Please <span className="text-blue-700 underline"><Link to="/register">Register</Link></span> </p>
                    </div>
                </div>
                


               <div>
                    <div className="form-control mt-6">
                            <button onClick={handleGoogleLogin} className="btn btn-outline btn-primary"> <span><FcGoogle className="text-2xl"></FcGoogle></span>Login with Google</button>
                    </div>
                    <div className="form-control mt-6">
                            <button onClick={handleGithubLogin} className="btn btn-outline btn-primary"><span><BsGithub className="text-2xl text-black "></BsGithub></span>Login with GitHub</button>
                    </div>
               </div>

            </div>
        </div>
    );
};

export default Login;