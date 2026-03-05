"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function SellerPage() {

  const params = useParams();
  const id = params.id as string;

  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch(process.env.NEXT_PUBLIC_API_URL + "/products")
      .then(res => res.json())
      .then(data => {

        const sellerProducts = data.filter(
          (p:any) => p.userId === id
        );

        setProducts(sellerProducts);
        setLoading(false);

      });

  }, [id]);

  if (loading) {
    return <p>Chargement...</p>;
  }

  return (
    <div style={{ padding: 40 }}>

      <h1>Profil vendeur</h1>

      <h2>Produits du vendeur</h2>

      {products.length === 0 && (
        <p>Aucun produit pour ce vendeur</p>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,250px)",
          gap: 20,
          marginTop: 20
        }}
      >

        {products.map(product => (

          <Link
            key={product.id}
            href={"/product/" + product.id}
            style={{
              border: "1px solid #eee",
              borderRadius: 10,
              textDecoration: "none",
              color: "black",
              overflow: "hidden"
            }}
          >

            <img
              src={product.image}
              style={{
                width: "100%",
                height: 200,
                objectFit: "cover"
              }}
            />

            <div style={{ padding: 10 }}>

              <h3>{product.title}</h3>

              <p style={{ color:"#00a884", fontWeight:"bold" }}>
                {product.price} FCFA
              </p>

            </div>

          </Link>

        ))}

      </div>

    </div>
  );
}
