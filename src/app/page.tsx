"use client";

import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const products = [
    { id: 1, name: "Produit A", price: 10000 },
    { id: 2, name: "Produit B", price: 15000 },
    { id: 3, name: "Produit C", price: 20000 },
  ];

  const [cart, setCart] = useState<any[]>([]);

  return (
    <div style={{ padding: "20px" }}>
      {/* MENU */}
      <nav style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <Link href="/">Home</Link>
        <Link href="/sell">Sell</Link>
        <Link href="/profil">Profil</Link>
        <span>Panier ({cart.length})</span>
      </nav>

      <h1>Marketplace</h1>

      {products.map((product) => {
        const commission = product.price * 0.1;
        const total = product.price + commission;

        return (
          <div
            key={product.id}
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h2>{product.name}</h2>
            <p>Prix : {product.price} FCFA</p>
            <p>Commission (10%) : {commission} FCFA</p>
            <p>Total : {total} FCFA</p>

            <button onClick={() => setCart([...cart, product])}>
              Ajouter au panier 🛒
            </button>
          </div>
        );
      })}
    </div>
  );
}
