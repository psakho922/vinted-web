"use client";

import { useState, useEffect } from "react";

export default function SellPage() {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      setToken(storedToken);
    } else {
      alert("Tu dois être connecté");
      window.location.href = "/login";
    }

  }, []);

  async function handleSubmit(e: any) {

    e.preventDefault();

    if (!image) {
      alert("Image obligatoire");
      return;
    }

    try {

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

      const data = await res.json();

      console.log("RESPONSE:", data);

      if (res.ok) {

        alert("Produit créé !");
        window.location.href = "/";

      } else {

        alert("Erreur serveur : " + JSON.stringify(data));

      }

    } catch (error) {

      console.error("Erreur :", error);
      alert("Erreur réseau");

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
          type="number"
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

        <button type="submit">
          Publier le produit
        </button>

      </form>

    </div>

  );
}
