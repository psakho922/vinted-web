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
      .then(res => res.json())
      .then(data => {
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
        style={{ marginTop: 20, borderRadius: 10 }}
      />

      <p style={{ fontSize: 20, marginTop: 20 }}>
        {product.price} FCFA
      </p>

      <br />

      <Link href="/acheter">
        <button style={{ padding: 10 }}>
          Acheter
        </button>
      </Link>

      <br /><br />

      <Link href={"/chat/" + product.id}>
        <button style={{ padding: 10 }}>
          Poser une question au vendeur
        </button>
      </Link>

    </div>

  );

}
