"use client";

import { useState } from "react";

export default function SellPage() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            title,
            price,
            image,
            userId: JSON.parse(atob(token!.split(".")[1])).sub,
          }),
        }
      );

      if (res.ok) {
        alert("Produit créé !");
        window.location.href = "/";
      } else {
        alert("Erreur création produit");
      }
    } catch (err) {
      console.error(err);
      alert("Erreur serveur");
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
          placeholder="Prix"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <br /><br />

        <input
          placeholder="URL image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit">Créer</button>
      </form>
    </div>
  );
}
