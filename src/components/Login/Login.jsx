// import React from 'react';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  GithubAuthProvider,
} from "firebase/auth";
import app from "../../fireBase/Firebase.init";
import { useState } from "react";
const Login = () => {
  const handleGoogleSignIn = () => {
    // console.log("google comming")

    const auth = getAuth(app);

    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const LoggedInUser = result.user;
        console.log(LoggedInUser);
        setUser(LoggedInUser);
      })
      .catch((error) => {
        console.log("error :", error.message);
      });
  };

  const githubProvider = new GithubAuthProvider();
  const handleGithubSignin = () => {
    const auth = getAuth();
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser)
      })
      .catch(error =>
        {
          console.log(error)
        });
  };

  const handleSingOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [user, setUser] = useState(null);

  return (
    <div>
      {user ? (
        <button onClick={handleSingOut}>sing out</button>
      ) : (
        <div>
          <button onClick={handleGoogleSignIn}>Google login</button>
          <button onClick={handleGithubSignin}>Github Sign in</button>
        </div>
      )}

      {user && (
        <div>
          <h3>User : {user.displayName}</h3>
          <p>Email : {user.email}</p>
          <p>Uid :{user.uid}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
