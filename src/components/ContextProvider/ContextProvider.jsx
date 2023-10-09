import { createContext, useEffect, useState } from "react";
import { getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    GithubAuthProvider,
    
 } from "firebase/auth";



import app from "../../firebase/firebase.config";


export const Context = createContext(null);

const ContextProvider = ({children}) => {

    const [events, setEvents] = useState([]);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [person, setPerson] = useState(null);
    
    

    useEffect(() =>{
        fetch('/events.json')
         .then(res => res.json())
         .then(data => setEvents(data))
    },[])

    useEffect(() =>{
        fetch('/persons.json')
         .then(res => res.json())
         .then(data => setPerson(data))
    },[])

    console.log(person)

    const auth = getAuth(app);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
           
    }

    const loginWithEmailPassword = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    const googleProvider = new GoogleAuthProvider();

    const loginWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }


    const gitHubProvider = new GithubAuthProvider();

    const loginWithGithub = () =>{
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider)
    }


    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }



    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('onauthstate', currentUser);
            setUser(currentUser);
            setLoading(false);
            
        })
        return () =>{
            unSubscribe();
        }
    },[])


    
    const info = {
        events,
        createUser,
        loginWithEmailPassword,
        logOut,
        user,
        loading,
        loginWithGoogle,
        loginWithGithub,
        person
        

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