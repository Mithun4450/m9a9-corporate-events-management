

const Team = () => {
    return (
        <div className="bg-blue-600 text-white rounded-md shadow-md text-center my-14">
            <h1 className="text-4xl font-bold p-9">Our Team</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-10 w-3/4 mx-auto">
                <div >
                    <div >
                            
                        <img className="w-32 h-32 mx-auto rounded-full" src="/public/persons/person5.png" /> 
                        
                    </div>
                    <div>
                        <h3>Mr. Rakib Uddin</h3>
                        <p>Managing Director</p>
                    </div>
                </div>
                <div>
                    <div >
                            
                        <img className="w-32 h-32 mx-auto rounded-full" src="/public/persons/person6.png" /> 
                        
                    </div>
                    <div>
                        <h3>Mr. Motaleb Hossain</h3>
                        <p>Additional Managing Director</p>
                    </div>
                </div>
                <div>
                    <div >
                            
                        <img className="w-32 h-32 mx-auto rounded-full" src="/public/persons/person1.png" /> 
                        
                    </div>
                    <div>
                        <h3>Mr. Karim Uddin</h3>
                        <p>Deputy Managing Director</p>
                    </div>
                </div>
                <div>
                    <div >
                            
                        <img className="w-32 h-32 mx-auto rounded-full" src="/public/persons/person2.png" /> 
                        
                    </div>
                    <div>
                        <h3>Mr. Reefat Mohiuddin</h3>
                        <p>Deputy Director</p>
                    </div>
                </div>
                <div>
                    <div >
                            
                        <img className="w-32 h-32 mx-auto rounded-full" src="/public/persons/person4.png" /> 
                        
                    </div>
                    <div>
                        <h3>Mr. Nasir Uddin</h3>
                        <p>Assistant Director</p>
                    </div>
                </div>
                <div>
                    <div >
                            
                        <img className="w-32 h-32 mx-auto rounded-full" src="/public/persons/person.png" /> 
                        
                    </div>
                    <div>
                        <h3>Mr. Ashraf Uddin</h3>
                        <p>Assistant Director</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Team;