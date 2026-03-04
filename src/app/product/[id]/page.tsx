"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function ProductPage() {
  const params = useParams();
  const id = params.id as string;

  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch(() => setProduct(null));
  }, [id]);

  if (!product) {
    return <p>Chargement...</p>;
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>{product.title}</h1>

      <p>{product.price} FCFA</p>

      <img
        src={product.image}
        alt={product.title}
        width="400"
      />

      <br />
      <br />

      <Link href="/acheter">
        <button
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
      </Link>
    </div>
  );
}
