"use client";

import { useState } from "react";

export default function SellPage() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  async function uploadImage(file: File) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "vinted_upload");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    return data.secure_url;
  }

  async function handleSubmit(e: any) {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Tu dois être connecté");
      return;
    }

    const userId = JSON.parse(atob(token.split(".")[1])).sub;

    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/products",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          price,
          image,
          userId,
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

  async function handleFile(e: any) {
    const file = e.target.files[0];
    const url = await uploadImage(file);
    setImage(url);
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
          onChange={handleFile}
        />

        <br /><br />

        {image && <img src={image} width="200" />}

        <br /><br />

        <button type="submit">
          Créer produit
        </button>
      </form>
    </div>
  );
}
