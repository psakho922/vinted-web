"use client";

import { useState } from "react";

export default function SellPage() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!title || !price || !image) {
      alert("Remplis tous les champs");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("image", image);

    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/products",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      alert("Produit ajouté !");
      setTitle("");
      setPrice("");
      setImage(null);
    } catch (error) {
      console.log(error);
      alert("Erreur");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Vendre un produit</h1>

      <input
        placeholder="Nom du produit"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: "block", marginBottom: "10px", padding: "10px" }}
      />

      <input
        placeholder="Prix"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={{ display: "block", marginBottom: "10px", padding: "10px" }}
      />

      {/* ✅ UPLOAD IMAGE */}
      <input
        type="file"
        onChange={(e: any) => setImage(e.target.files[0])}
        style={{ marginBottom: "10px" }}
      />

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Envoi..." : "Ajouter le produit"}
      </button>
    </div>
  );
}
