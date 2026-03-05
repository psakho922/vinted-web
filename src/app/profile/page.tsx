"use client";

import { useEffect, useState } from "react";

export default function ProfilePage() {

  const [products, setProducts] = useState<any[]>([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) return;

    const payload = JSON.parse(atob(token.split(".")[1]));
    setUserId(payload.userId);

    fetch(process.env.NEXT_PUBLIC_API_URL + "/products")
      .then(res => res.json())
      .then(data => {

        const myProducts = data.filter((p:any) => p.userId === payload.userId);
        setProducts(myProducts);

      });

  }, []);

  return (

    <div style={{ padding: 40 }}>

      <h1>Mon profil</h1>

      <h2>Mes produits</h2>

      {products.length === 0 && (
        <p>Tu n'as encore aucun produit</p>
      )}

      {products.map((product) => (

        <div
          key={product.id}
          style={{
            border: "1px solid #ddd",
            padding: 10,
            marginTop: 10,
            borderRadius: 10
          }}
        >

          <img src={product.image} width="120" />

          <h3>{product.title}</h3>

          <p>{product.price} FCFA</p>

        </div>

      ))}

    </div>

  );
}
