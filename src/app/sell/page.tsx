"use client";

import { useState } from "react";
import Button from "../../components/Button";

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

      alert("Produit créé");

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
          onChange={(e)=>setTitle(e.target.value)}
          required
        />

        <br/><br/>

        <input
          placeholder="Prix"
          value={price}
          onChange={(e)=>setPrice(e.target.value)}
          required
        />

        <br/><br/>

        <input
          placeholder="URL image"
          value={image}
          onChange={(e)=>setImage(e.target.value)}
          required
        />

        <br/><br/>

        <Button type="submit">
          Publier le produit
        </Button>

      </form>

    </div>

  );

}
