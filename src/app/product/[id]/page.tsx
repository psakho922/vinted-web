"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function ProductPage() {

  const params = useParams();
  const id = params.id as string;

  const [product, setProduct] = useState<any>(null);

  useEffect(() => {

    fetch(process.env.NEXT_PUBLIC_API_URL + "/products")
      .then(res => res.json())
      .then(data => {

        const found = data.find((p:any) => p.id === id);
        setProduct(found);

      });

  }, [id]);

  if (!product) return <p>Chargement...</p>;

  return (

    <div style={{ padding: 40 }}>

      <h1>{product.title}</h1>

      <img
        src={product.image}
        style={{
          width: 400,
          marginTop: 20,
          borderRadius: 10
        }}
      />

      <p style={{ fontSize: 22, marginTop: 20 }}>
        {product.price} FCFA
      </p>

      <br />

      <Link
        href={"/seller/" + product.userId}
        style={{
          color: "blue",
          textDecoration: "underline",
          fontSize: 18
        }}
      >
        Voir profil vendeur
      </Link>

    </div>

  );

}
