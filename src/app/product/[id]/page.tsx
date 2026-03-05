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

        const found = data.find((p: any) => p.id === id);
        setProduct(found);

      });

  }, [id]);

  function addToCart() {

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Produit ajouté au panier");

  }

  if (!product) return <p>Chargement...</p>;

  return (

    <div style={{ padding: 40 }}>

      <h1>{product.title}</h1>

      <img
        src={product.image}
        style={{
          width: 400,
          borderRadius: 10
        }}
      />

      <p style={{ fontSize: 22 }}>
        {product.price} FCFA
      </p>

      <br />

      <button
        onClick={addToCart}
        style={{
          background: "#00a884",
          color: "white",
          padding: "10px 20px",
          borderRadius: 8
        }}
      >
        Ajouter au panier
      </button>

      <br /><br />

      <Link href="/panier">Voir le panier</Link>

    </div>

  );

}
