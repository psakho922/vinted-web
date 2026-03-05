"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {

  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {

    fetch(process.env.NEXT_PUBLIC_API_URL + "/products")
      .then(res => res.json())
      .then(data => setProducts(data));

  }, []);

  return (

    <div style={{ padding: 40 }}>

      <h1>Marketplace</h1>

      {products.length === 0 && (
        <p>Aucun produit pour le moment</p>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,220px)",
          gap: 30,
          marginTop: 30
        }}
      >

        {products.map((p: any) => (

          <Link
            key={p.id}
            href={"/product/" + p.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 10,
              padding: 10,
              textDecoration: "none",
              color: "black"
            }}
          >

            <img
              src={p.image}
              style={{
                width: "100%",
                borderRadius: 10
              }}
            />

            <h3>{p.title}</h3>

            <p>{p.price} FCFA</p>

          </Link>

        ))}

      </div>

    </div>

  );

}
