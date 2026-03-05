"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function PanierPage() {

  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {

    const stored = JSON.parse(localStorage.getItem("cart") || "[]");

    setCart(stored);

  }, []);

  const total = cart.reduce((sum, p) => sum + Number(p.price), 0);

  const commission = total * 0.1;

  const sellerAmount = total - commission;

  return (

    <div style={{ padding: 40 }}>

      <h1>Panier</h1>

      {cart.length === 0 && <p>Votre panier est vide</p>}

      {cart.map((p, i) => (

        <div key={i} style={{ marginBottom: 20 }}>

          <h3>{p.title}</h3>

          <p>{p.price} FCFA</p>

        </div>

      ))}

      <br />

      <h2>Total : {total} FCFA</h2>

      <h3>Commission plateforme : {commission} FCFA</h3>

      <h3>Montant vendeur : {sellerAmount} FCFA</h3>

      <br />

      <Link
        href="/acheter"
        style={{
          background: "#00a884",
          color: "white",
          padding: "10px 20px",
          borderRadius: 8,
          textDecoration: "none"
        }}
      >
        Payer
      </Link>

    </div>

  );

}
