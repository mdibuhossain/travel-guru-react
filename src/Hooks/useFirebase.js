import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { initAuth } from '../FirebaseAuth/initAuth';

initAuth();

export const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();

    const signWithGoogle = (e) => {
        e.preventDefault();
        const GoogleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, GoogleProvider)
            .then(result => setUser(result.user)).catch(error => setError(error.message));
    }

    const signWithFacebook = (e) => {
        e.preventDefault();
        const FacebookProvider = new FacebookAuthProvider();
        signInWithPopup(auth, FacebookProvider)
            .then(result => setUser(result.user)).catch(error => setError(error.message));
    }

    const logOut = (e) => {
        e.preventDefault();
        signOut(auth)
            .then(() => {
                setUser({});
            }).catch(error => setError(error.message));
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, [])

    return {
        user,
        error,
        logOut,
        signWithFacebook,
        signWithGoogle
    }
}