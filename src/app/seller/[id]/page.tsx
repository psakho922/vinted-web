"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ProductPage() {

  const params = useParams();
  const id = params.id as string;

  const [product, setProduct] = useState<any>(null);

  useEffect(() => {

    fetch(process.env.NEXT_PUBLIC_API_URL + "/products/" + id)
      .then(res => res.json())
      .then(data => setProduct(data));

  }, [id]);

  if (!product) return <p>Chargement...</p>;

  return (
    <div style={{ padding: 40 }}>

      <h1>{product.title}</h1>

      <img
        src={product.image}
        style={{ width: 400, marginTop: 20 }}
      />

      <p style={{ fontSize: 20 }}>
        {product.price} FCFA
      </p>

      <br />

      <a
        href={"/seller/" + product.userId}
        style={{
          color: "blue",
          textDecoration: "underline"
        }}
      >
        Voir profil vendeur
      </a>

    </div>
  );
}
