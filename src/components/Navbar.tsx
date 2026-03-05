"use client";

import Link from "next/link";

export default function Navbar() {

  return (

    <div
      style={{
        display: "flex",
        gap: 20,
        padding: 20,
        borderBottom: "1px solid #ddd"
      }}
    >

      <Link href="/">Home</Link>

      <Link href="/sell">Sell</Link>

      <Link href="/panier">Panier 🛒</Link>

      <Link href="/login">Login</Link>

      <Link href="/register">Register</Link>

    </div>

  );

}
