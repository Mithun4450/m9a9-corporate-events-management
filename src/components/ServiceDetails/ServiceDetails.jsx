import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../ContextProvider/ContextProvider";




const ServiceDetails = () => {

    const {sid} = useParams();
    
    const {events} = useContext(Context);
    
    const findService = events.find(service => service.sid === parseInt(sid))
    console.log(findService)

    const {title, details, price, features, image} = findService;
    
    return (
        <div className="card md:card-side bg-base-100 shadow-xl mt-8 mb-8">
            <figure><img className="h-full w-full" src={image} alt="Image of service"/></figure>
            <div className="card-body">
                <h2 className="card-title font-extrabold">{title}</h2>
                <p className="font-bold">Main Features:</p>
                <ul className="flex flex-col ">
                    {
                        features.map((feature, indx) =><li key={indx}>{feature}</li>)
                    }
                </ul>
                <p className="font-bold">Details:</p>
                <p>{details}</p>
                <p className="font-bold">Price: Tk.<span>{price}</span> <span>per person</span></p>
                <p>(This price is applicable when minimum participants is 20)</p>
                <div className="rating rating-md">
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                </div>

                <div className="card-actions justify-end">
                <button className="btn btn-primary">Booking Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;