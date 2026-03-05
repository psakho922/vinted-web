"use client";

import Link from "next/link";

export default function Navbar() {

  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("token")
      : null;

  function logout() {
    localStorage.removeItem("token");
    window.location.href = "/";
  }

  return (
    <nav
      style={{
        padding: 20,
        borderBottom: "1px solid #ddd",
        display: "flex",
        gap: 20,
      }}
    >

      <Link href="/">Home</Link>

      {token ? (
        <>
          <Link href="/sell">Sell</Link>

          <Link href="/profile">Profil</Link>

          <button onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <Link href="/login">Login</Link>

          <Link href="/register">Register</Link>
        </>
      )}

    </nav>
  );
}




