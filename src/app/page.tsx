"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log("Erreur:", err);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      
      <h1>Marketplace</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {products.map((product: any) => (
          <Link
            key={product.id}
            href={"/product/" + product.id}
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                background: "#fff",
                padding: "15px",
                borderRadius: "10px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                cursor: "pointer",
              }}
            >
              <img
                src={product.image || "https://via.placeholder.com/300"}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />

              <h3 style={{ marginTop: "10px" }}>
                {product.title}
              </h3>

              <p style={{ fontWeight: "bold", color: "#09b1ba" }}>
                {product.price} FCFA
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
