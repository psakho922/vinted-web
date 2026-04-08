"use client";

import { useState } from "react";
import Link from "next/link";

export default function SellPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!name || !price) {
      alert("Remplis tous les champs");
      return;
    }

    alert(`Produit ajouté : ${name} - ${price} FCFA`);

    setName("");
    setPrice("");
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* MENU */}
      <nav style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <Link href="/">Home</Link>
        <Link href="/sell">Sell</Link>
        <Link href="/profil">Profil</Link>
      </nav>

      <h1>Vendre un produit</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: "300px" }}>
        <div style={{ marginBottom: "10px" }}>
          <label>Nom du produit</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", padding: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Prix (FCFA)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={{ width: "100%", padding: "5px" }}
          />
        </div>

        <button type="submit">Ajouter le produit</button>
      </form>
    </div>
  );
}
