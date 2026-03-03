"use client";

import { useState } from "react";

export default function SellPage() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // 🔥 empêche le GET automatique

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            title,
            price: Number(price),
            imageUrl,
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Erreur création produit");
      }

      setMessage("Produit créé !");
      setTitle("");
      setPrice("");
      setImageUrl("");
    } catch (err) {
      setMessage("Erreur création produit");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Vendre un produit</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Prix"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="URL image"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />

        <button type="submit">Créer</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
