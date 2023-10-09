import { useContext } from "react";
import { Context } from "../ContextProvider/ContextProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(Context);
    const location = useLocation();
    


    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    else if(!user){
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }
    else{
        return children;
    }

    
    // return <Navigate state={location.pathname} to={user? location.state : "/login"}></Navigate>
};

export default PrivateRoute;