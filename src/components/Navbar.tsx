"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {

  const [notifications,setNotifications] = useState(0);

  useEffect(()=>{

    const token = localStorage.getItem("token");

    if(!token) return;

    fetch(process.env.NEXT_PUBLIC_API_URL + "/chat")
      .then(res=>res.json())
      .then(data=>{
        setNotifications(data.length);
      });

  },[]);

  return(

    <nav style={{
      display:"flex",
      gap:20,
      padding:20,
      background:"#eee"
    }}>

      <Link href="/">Home</Link>

      <Link href="/sell">Sell</Link>

      <Link href="/panier">Panier</Link>

      <Link href="/chat">
        Messages 🔔 {notifications}
      </Link>

      <Link href="/profile">
        Profil
      </Link>

    </nav>

  );

}
