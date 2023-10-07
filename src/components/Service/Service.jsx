

const Service = ({service}) => {

    const {title, image, features} = service;

    return (
        <div className="card card-compact bg-base-100 shadow-xl mx-auto">
            <figure><img className="h-52 w-80" src={image} alt="image of service" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="font-bold">Main Features:</p>
                <ul className="flex flex-col flex-grow">
                    {
                        features.map((feature, indx) =><li key={indx}>{feature}</li>)
                    }
                </ul>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Show Details</button>
                </div>
            </div>
        </div>
    );
};

export default Service;