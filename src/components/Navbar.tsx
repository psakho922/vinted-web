"use client";

import Link from "next/link";

export default function Navbar() {

  return (

    <div style={{
      padding:20,
      borderBottom:"1px solid #ccc",
      display:"flex",
      gap:20
    }}>

      <Link href="/">
        Home
      </Link>

      <Link href="/sell">
        Sell
      </Link>

      <Link href="/panier">
        Panier
      </Link>

      <Link href="/profile">
        Profil
      </Link>

    </div>

  );
}
