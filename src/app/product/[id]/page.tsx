"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function ProductPage() {

  const params = useParams();
  const id = params.id as string;

  const [product, setProduct] = useState<any>(null);

  useEffect(() => {

    fetch(process.env.NEXT_PUBLIC_API_URL + "/products/" + id)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });

  }, [id]);

  if (!product) return <p>Chargement...</p>;

  return (

    <div style={{ padding: 40 }}>

      <h1>{product.title}</h1>

      <img
        src={product.image}
        width="400"
        style={{ marginTop: 20 }}
      />

      <p style={{ fontSize: 20 }}>
        {product.price} FCFA
      </p>

      <br/>

      <Link href="/acheter">
        <button
          style={{
            padding: 12,
            fontSize: 16,
            cursor: "pointer"
          }}
        >
          Acheter
        </button>
      </Link>

    </div>

  );
}
