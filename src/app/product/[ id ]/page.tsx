"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ProductPage() {
  const params = useParams();
  const id = params?.id as string;

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    async function fetchProduct() {
      try {
        const res = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "/products/" + id
        );

        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) return <p>Chargement...</p>;

  if (!product) return <p>Produit introuvable</p>;

  return (
    <div style={{ padding: 40 }}>
      <h1>{product.title}</h1>
      <p>{product.price} FCFA</p>
      <img src={product.image} width="400" />
    </div>
  );
}
