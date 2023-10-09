import { useContext } from "react";
import { Context } from "../ContextProvider/ContextProvider";
import Member from "../Member/Member";


const Team = () => {

    const {person} = useContext(Context);

    
    return (
        <div className="bg-blue-600 text-white rounded-md shadow-md text-center my-14">
            <h1 className="text-4xl font-bold p-9">Our Team</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-10 w-3/4 mx-auto">
                {
                    person.slice(0, 6).map(member => <Member key={member.id} member={member}></Member>)
                }
               
            </div>
            
        </div>
    );
};

export default Team;