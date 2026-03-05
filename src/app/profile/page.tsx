"use client";

import { useEffect, useState } from "react";

export default function ProfilePage() {

  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {

    const token = localStorage.getItem("token");

    if (!token) return;

    const payload = JSON.parse(atob(token.split(".")[1]));
    const userId = payload.userId;

    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/products");
    const data = await res.json();

    const myProducts = data.filter((p:any) => p.userId === userId);

    setProducts(myProducts);
  }

  async function deleteProduct(id:string) {

    const token = localStorage.getItem("token");

    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/products/" + id,
      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + token
        }
      }
    );

    if(res.ok){
      alert("Produit supprimé");
      loadProducts();
    } else {
      alert("Erreur suppression");
    }

  }

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
            padding: 15,
            marginTop: 15,
            borderRadius: 10
          }}
        >

          <img src={product.image} width="120" />

          <h3>{product.title}</h3>

          <p>{product.price} FCFA</p>

          <button
            onClick={() => deleteProduct(product.id)}
            style={{
              marginTop: 10,
              background: "red",
              color: "white",
              border: "none",
              padding: 8,
              borderRadius: 5
            }}
          >
            Supprimer
          </button>

        </div>

      ))}

    </div>
  );
}
