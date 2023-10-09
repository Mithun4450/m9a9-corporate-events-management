import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Service = ({service}) => {

    const {sid, title, image, details, price} = service;

    useEffect(() => {
        AOS.init({
          duration: 3000,
          easing: 'ease-in-out',
        });
      }, []);

    return (
        <div className="card card-compact bg-base-100 shadow-xl mx-auto" data-aos="fade-up">
            <figure><img className="h-52 w-80" src={image} alt="image of service" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="w-72"><p>{details}</p></div>
                <p className="font-bold">Price: Tk.<span>{price}</span> <span>per person</span></p>
                <div className="card-actions justify-end">
                <Link to={`/serviceDetails/${sid}`}><button className="btn btn-primary">Show Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;