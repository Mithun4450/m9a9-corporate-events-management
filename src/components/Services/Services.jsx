import { useContext } from "react";
import { Context } from "../ContextProvider/ContextProvider";
import Service from "../Service/Service";

const Services = () => {

    const {events} = useContext(Context);
    
    return (
        <div className="mt-10">
            <h1 className="text-center text-4xl font-bold mb-5 ">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                {
                    events.map(service => <Service service={service} key={service.sid}></Service>)
                }
            
            </div>
        </div>
       
    );
};

export default Services;