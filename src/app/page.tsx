"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HomePage() {

  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {

    fetch(process.env.NEXT_PUBLIC_API_URL + "/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });

  }, []);

  return (

    <div style={{ padding: 40 }}>

      <h1>Marketplace</h1>

      {products.length === 0 && (
        <p>Aucun produit pour le moment</p>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>

        {products.map((product) => (

          <Link key={product.id} href={"/product/" + product.id}>

            <div style={{ border: "1px solid #ddd", padding: 20 }}>

              {product.image && (
                <img
                  src={product.image}
                  width="200"
                  style={{ objectFit: "cover" }}
                />
              )}

              <h3>{product.title}</h3>

              <p>{product.price} FCFA</p>

            </div>

          </Link>

        ))}

      </div>

    </div>
  );
}
