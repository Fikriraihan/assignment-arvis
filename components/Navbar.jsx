import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { auth } from "../pages/firebase.config";
import Cart from "./Cart";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { useStateContext } from "../context/StateContext";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [user, setUser] = useState({});

  const logout = async () => {
    await signOut(auth);
    router.push("/");
  };

  useEffect(() => {
    console.log(auth);
    setTimeout(() => {
      setUser(auth);
    }, 500);
  }, []);

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/homepage">Nike Store</Link>
      </p>
      {auth.currentUser != null && <p>Welcome, {auth.currentUser.email}</p>}
      {auth.currentUser !== null && <button onClick={logout}>Sign Out</button>}
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        {auth.currentUser && <AiOutlineShopping />}
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
