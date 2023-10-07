import { useContext } from "react";
import { Context } from "../ContextProvider/ContextProvider";

const Services = () => {

    const {events} = useContext(Context);
    console.log(events)
    return (
        <div>
            
        </div>
    );
};

export default Services;