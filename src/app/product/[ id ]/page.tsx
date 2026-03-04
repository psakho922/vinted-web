"use client";

import { useEffect, useState } from "react";

export default function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const [product, setProduct] = useState<any>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(
          "https://vinted-api-clean.onrender.com/products/" + id
        );

        if (!res.ok) {
          setError(true);
          return;
        }

        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
        setError(true);
      }
    }

    fetchProduct();
  }, [id]);

  if (error) return <p>Erreur chargement produit</p>;
  if (!product) return <p>Chargement...</p>;

  return (
    <div style={{ padding: 40 }}>
      <h1>{product.title}</h1>
      <p>{product.price} FCFA</p>
      <img src={product.image} width="400" />
    </div>
  );
}
