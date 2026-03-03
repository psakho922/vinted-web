"use client";

import { useState } from "react";

export default function SellPage() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Tu dois être connecté");
      return;
    }

    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/products",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          title,
          price: Number(price),
          imageUrl,
        }),
      }
    );

    if (res.ok) {
      alert("Produit créé !");
      window.location.href = "/";
    } else {
      alert("Erreur création produit");
    }
  }

  return (
    <div style={{ padding: "40px" }}>
      <h2>Vendre un produit</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Titre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="number"
          placeholder="Prix"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <br /><br />

        <input
          placeholder="URL image"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit">Créer</button>
      </form>
    </div>
  );
}
