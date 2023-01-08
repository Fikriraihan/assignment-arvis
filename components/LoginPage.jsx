import React, { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../pages/firebase.config";
import { useRouter } from "next/router";

const LoginPage = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("second");
  const [user, setUser] = useState({});
  const router = useRouter();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log("user", user);
      alert("Successfully Login");
      if (auth.currentUser != null) {
        router.push("/homepage");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(auth);
    if (auth.currentUser !== null) {
      console.log("testmasuk");
      router.push("/homepage");
    }
  }, [auth]);
  return (
    <div>
      <div className="container">
        <label htmlFor="uname">
          <b>Username</b>
        </label>
        <input
          className="inputForm"
          type="text"
          placeholder="Enter Username"
          name="uname"
          required
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          className="inputForm"
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button className="buttonSubmit" type="submit" onClick={login}>
          Login
        </button>
        <label>
          <input type="checkbox" checked="checked" name="remember" /> Remember me
        </label>
      </div>
    </div>
  );
};

export default LoginPage;
