import React, {useEffect, useState} from 'react';
import {projectAuth} from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [isCancelled,setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext()

    const signup = async (email, password, displayName) => {
        setError(null)
        setIsPending(true)

        try {
        // signup user
            const res = await projectAuth.createUserWithEmailAndPassword(email, password)
            // console.log(res.user)

            if (!res){
                throw new Error("Could not complete signup")
            }

        //    Add display name to user
            await res.user.updateProfile({displayName})

            // Dispatch login action
            // pulled from the useAuthContext which pulls from useContext(AuthContext) which
            // houses the dispatch at <AuthContext.Provider value={{...state, dispatch}}> location
            dispatch({type: 'LOGIN', payload: res.user})
            if (!isCancelled){
                setError(null)
                setIsPending(false)
            }

        } catch(err){
            if (!isCancelled) {
                console.log(err)
                setError(err.message)
                setIsPending(false)
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, []);

    return {signup, error, isPending};
};

