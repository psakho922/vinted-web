"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {

  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
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
          gridTemplateColumns: "repeat(auto-fill, 250px)",
          gap: 20,
          marginTop: 30
        }}
      >

        {products.map((product) => (

          <Link
            key={product.id}
            href={"/product/" + product.id}
            style={{
              border: "1px solid #ddd",
              padding: 10,
              borderRadius: 10,
              textDecoration: "none",
              color: "black"
            }}
          >

            <img
              src={product.image}
              style={{
                width: "100%",
                height: 200,
                objectFit: "cover",
                borderRadius: 10
              }}
            />

            <h3>{product.title}</h3>

            <p>{product.price} FCFA</p>

          </Link>

        ))}

      </div>

    </div>
  );
}
