"use client";

import { useState } from "react";

export default function SellPage() {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Tu dois être connecté");
      return;
    }

    const userId = JSON.parse(atob(token.split(".")[1])).userId;

    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/products",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token
        },
        body: JSON.stringify({
          title,
          price,
          image,
          userId
        })
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
    <div style={{ padding: 40 }}>
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
          type="file"
          accept="image/*"
          onChange={(e) => {

            const file = e.target.files?.[0];

            if (!file) return;

            const reader = new FileReader();

            reader.onloadend = () => {
              setImage(reader.result as string);
            };

            reader.readAsDataURL(file);

          }}
        />

        <br /><br />

        <button type="submit">
          Créer
        </button>

      </form>
    </div>
  );
}
