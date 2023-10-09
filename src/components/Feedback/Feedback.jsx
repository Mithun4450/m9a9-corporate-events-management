

const Feedback = () => {
    return (
        <div className="hero min-h-screen bg-red-200 my-14 rounded-md shadow-lg" >
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left lg:w-1/4" >
                    <h1 className=" text-2xl md:text-3xl lg:text-4xl font-bold">Leave a feedback or ask your question here!</h1>
                </div>

                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100" >
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea placeholder="Your message" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                    
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Feedback;