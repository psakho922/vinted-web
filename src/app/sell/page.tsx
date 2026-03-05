"use client";

import { useState } from "react";

export default function SellPage() {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  async function uploadImage(file: File) {

    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "vinted_market");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dtfumoro5/image/upload",
      {
        method: "POST",
        body: formData
      }
    );

    const data = await res.json();

    setImage(data.secure_url);
  }

  async function handleSubmit(e: React.FormEvent) {

    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Tu dois être connecté");
      window.location.href = "/login";
      return;
    }

    setLoading(true);

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

    setLoading(false);

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
            if (file) uploadImage(file);
          }}
        />

        <br /><br />

        {image && (
          <img src={image} width="200" />
        )}

        <br /><br />

        <button type="submit">

          {loading ? "Création..." : "Créer produit"}

        </button>

      </form>

    </div>
  );
}
