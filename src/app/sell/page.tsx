"use client";

import { useState } from "react";

export default function SellPage() {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  function getToken() {

    const local = localStorage.getItem("token");
    const session = sessionStorage.getItem("token");

    const cookie = document.cookie
      .split("; ")
      .find(row => row.startsWith("token="))
      ?.split("=")[1];

    return local || session || cookie;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const token = getToken();

    if (!token) {
      alert("Tu dois être connecté");
      window.location.href = "/login";
      return;
    }

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
          image
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
      <h1>Vendre un produit</h1>

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
          Créer produit
        </button>

      </form>
    </div>
  );
}
