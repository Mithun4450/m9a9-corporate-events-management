

const Member = ({member}) => {
    const {img, name, designation} = member;
    return (
        <div data-aos="fade-up" >
            <div >
                    
                <img className="w-32 h-32 mx-auto rounded-full" src={img} /> 
                
            </div>
            <div>
                <h3>{name}</h3>
                <p>{designation}</p>
            </div>
        </div>
    );
};

export default Member;