"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  return (
    <nav style={{ padding: 20, borderBottom: "1px solid #ccc" }}>
      <Link href="/">Home</Link>{" "}
      
      {isLoggedIn ? (
        <>
          <Link href="/sell">Sell</Link>{" "}
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link href="/login">Login</Link>{" "}
          <Link href="/register">Register</Link>
        </>
      )}
    </nav>
  );
}




