import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";


export const registerUserWithEmail = async ({ email, password, displayName }) =>{

    try {

        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        await updateProfile( FirebaseAuth.currentUser, { displayName } );
        
        const { uid, photoURL } = resp.user;

        return {
            ok: true,
            displayName, email, photoURL, uid
        }
        
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;       
        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }

}

export const loginWithEmailPassword = async ({email, password}) => {
    try {
        const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL, displayName } = resp.user;
        return {
            ok: true,
            displayName, email, photoURL, uid
        }

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;       
        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }
}

export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut();
}