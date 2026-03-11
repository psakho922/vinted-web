"use client";

import { useState, useEffect } from "react";

export default function SellPage() {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [token, setToken] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {

    if (typeof window !== "undefined") {

      const storedToken = localStorage.getItem("token");

      if (!storedToken) {
        alert("Tu dois être connecté");
        window.location.href = "/login";
      } else {
        setToken(storedToken);
      }

    }

  }, []);

  async function handleImage(e:any) {

    const file = e.target.files[0];

    if (!file) return;

    setUploading(true);

    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "vinted_upload");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dtfumoro5/image/upload",
      {
        method: "POST",
        body: formData
      }
    );

    const data = await res.json();

    setImage(data.secure_url);

    setUploading(false);

  }

  async function handleSubmit(e:any) {

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

      if (res.ok) {

        alert("Produit créé !");
        window.location.href = "/";

      } else {

        alert("Erreur serveur : " + JSON.stringify(data));

      }

    } catch (error) {

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
          type="file"
          accept="image/*"
          onChange={handleImage}
        />

        <br/><br/>

        {uploading && <p>Upload image...</p>}

        {image && (
          <img
            src={image}
            width="200"
            style={{marginTop:20}}
          />
        )}

        <br/><br/>

        <button type="submit">
          Publier le produit
        </button>

      </form>

    </div>

  );
}vv
