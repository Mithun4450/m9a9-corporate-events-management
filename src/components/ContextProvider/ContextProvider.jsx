import { createContext, useEffect, useState } from "react";

export const Context = createContext(null);

const ContextProvider = ({children}) => {

    const [events, setEvents] = useState([]);
    
    

    useEffect(() =>{
        fetch('/events.json')
         .then(res => res.json())
         .then(data => setEvents(data))
    },[])
    
    const info = {
        events
        

    }

    return (
        <div>
            <Context.Provider value={info}>
                {children}
            </Context.Provider>
            
        </div>
    );
};

export default ContextProvider;