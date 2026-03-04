"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ProductPage() {
  const params = useParams();
  const id = params?.id as string;

  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Produit introuvable");
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch(() => setProduct(null));
  }, [id]);

  if (!product) return <p>Chargement...</p>;

  const handleBuy = () => {
    alert("Paiement bientôt disponible");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>{product.title}</h1>

      <p>{product.price} FCFA</p>

      <img
        src={product.image}
        alt={product.title}
        width="400"
      />

      <br /><br />

      <button
        onClick={handleBuy}
        style={{
          padding: "12px 20px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        Acheter
      </button>
    </div>
  );
}
