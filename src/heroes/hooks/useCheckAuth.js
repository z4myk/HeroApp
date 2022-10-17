import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { login, logout } from "../../store/auth/authSlice";
import { FirebaseAuth } from "../../firebase/config";

export const useCheckAuth = () => {
     const [currentUser, setCurrentUser] = useState('')
    const { status } = useSelector( state => state.auth );

    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged( FirebaseAuth, async ( user ) => {
            if(!user) return dispatch(logout());

            const { uid, email, displayName, photoURL } = user;
            setCurrentUser(user)
            dispatch(login({uid, email, displayName, photoURL}));
        } )
    }, []);

    return {
        status,
        currentUser
        
    }    

}
    