import React, { useState, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

import './App.css';
import './constants/firebase.js';

function App() {

  const auth = getAuth();
  const [user, setUser] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function login() {
    setError('');
    if (!email || !password)
    {
      setError("You must enter an email and password.");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        setUser(userCredential)
        }).catch(err => {
          setError(err.message);
        })
  }

  function register() {
    setError('');
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    setUser(userCredential.user)
    // ...
  })
  .catch((error) => {
    setError(error.message);
    // ..
  });
  }

  function logout() {
    signOut(auth)
    .then(() => {
      setUser(false);
    })
    .catch(err => {
      setError(err);
    });
  }

  useEffect(() => {
    onAuthStateChanged(auth, (u) => {
      if (u) {
        setUser(u);
      }
    });
  }, [auth]);

  return (
    <div className="app">
      <div className="login">
        {
          error ? <p>{error}</p> : ""
        }
        {
          user ? 
          <>
          <p>You are logged in. Here are some things you can do:</p>
          <ol>
            <li><span onClick={() => logout()}>Logout</span></li>
          </ol>
          </> : 
          <>
          <p>This website is made with React and Firebase. You can see the code at <a href=""></a></p>
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="button" value="Login" onClick={() => login()} />
        <input type="button" value="Register and Login" onClick={() => register()} />
        </>
        }
      </div>
    </div>
  );
}

export default App;
