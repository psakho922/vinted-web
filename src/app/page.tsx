"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  async function handleDelete(id: string) {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Tu dois être connecté");
      return;
    }

    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/products/" + id,
      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    if (res.ok) {
      alert("Produit supprimé !");
      setProducts(products.filter((p) => p.id !== id));
    } else {
      alert("Erreur suppression");
    }
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Marketplace</h1>

      {products.length === 0 && <p>Aucun produit pour le moment</p>}

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ccc",
            padding: 20,
            marginBottom: 20,
          }}
        >
          <h3>{product.title}</h3>
          <p>{product.price} FCFA</p>
          <img src={product.image} width="200" />

          <br />
          <br />

          <button onClick={() => handleDelete(product.id)}>
            Supprimer
          </button>
        </div>
      ))}
    </div>
  );
}
