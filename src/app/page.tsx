"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    api.get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Marketplace</h1>

      {products.length === 0 ? (
        <p>Aucun produit pour le moment</p>
      ) : (
        products.map((product) => (
          <div key={product.id} style={{ marginBottom: 20 }}>
            <h3>{product.title}</h3>
            <p>{product.price} FCFA</p>
          </div>
        ))
      )}
    </div>
  );
}
