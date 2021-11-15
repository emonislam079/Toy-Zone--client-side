import initializeAuthentication from '../Components/LogIn/Firebase/firebase.init';
import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, signOut } from "firebase/auth";




initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);


    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()

    const registerUser = (email, password,name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const newUser = {email, displayName: name}
            setUser(newUser);
            // save user to database
            saveUser(email, name, 'POST');
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
              }).catch((error) => {
              });
            history.replace('/');
        })
        .catch((error) => {
          const errorCode = error.code;
          setAuthError(error.message);
          // ..
        })
        .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
     const destination = location?.state?.from || "/";
     history.replace(destination);
    setAuthError('');
  })
  .catch((error) => {
    setAuthError(error.message);
  })
  .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = (location, history ) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
  .then((result) => {
    const destination = location?.state?.from || "/";
     history.replace(destination);
    const user = result.user;
    saveUser(user.email, user.displayName, 'PUT')
    setAuthError('');
  }).catch((error) => {
    setAuthError(error.message);
  }).finally(() => setIsLoading(false))
    }

    // observe user
    useEffect(() => {
      const unsubscribed = onAuthStateChanged(auth, user => {
          if (user) {
              setUser(user);
          }
          else {
              setUser({})
          }
          setIsLoading(false);
      });
      return () => unsubscribed;
  }, [])

    useEffect(() => {
      fetch(`https://agile-fortress-60515.herokuapp.com/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
    } , [user.email])

    const logout = () => {
      setIsLoading(true);
      signOut(auth).then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        })
        .finally(() => setIsLoading(false));
  }

    const saveUser = (email, displayName, method) => {
      const user = {email, displayName};
      fetch('https://agile-fortress-60515.herokuapp.com/users', {
        method: method,
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then()
    }

    return{
        user,
        admin,
        registerUser,
        loginUser,
        logout,
        isLoading,
        authError, 
        signInWithGoogle
    }
};

export default useFirebase;
