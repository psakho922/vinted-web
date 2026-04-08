"use client";

import { useState } from "react";

type Produit = {
  id: number;
  nom: string;
  prix: number;
};

export default function PageProduits() {
  const produits: Produit[] = [
    { id: 1, nom: "Produit A", prix: 10000 },
    { id: 2, nom: "Produit B", prix: 15000 },
    { id: 3, nom: "Produit C", prix: 20000 },
  ];

  const [cart, setCart] = useState<{ produit: Produit; total: number }[]>([]);

  const ajouterAuPanier = (produit: Produit) => {
    const commission = produit.prix * 0.1;
    const total = produit.prix + commission;
    setCart([...cart, { produit, total }]);
    alert(`Produit ajouté au panier ! Total : ${total} FCFA`);
  };

  const totalPanier = cart.reduce((acc, item) => acc + item.total, 0);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Nos Produits</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {produits.map((p) => {
          const commission = p.prix * 0.1;
          const total = p.prix + commission;
          return (
            <div
              key={p.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "15px",
                width: "200px",
              }}
            >
              <h2>{p.nom}</h2>
              <p>Prix : {p.prix} FCFA</p>
              <p>Commission (10%) : {commission} FCFA</p>
              <p>Total : {total} FCFA</p>
              <button
                onClick={() => ajouterAuPanier(p)}
                style={{
                  backgroundColor: "#0070f3",
                  color: "white",
                  padding: "10px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              >
                Ajouter au panier
              </button>
            </div>
          );
        })}
      </div>

      <h2 style={{ marginTop: "30px" }}>Panier</h2>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.produit.nom} - Total : {item.total} FCFA
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && <h3>Total Panier : {totalPanier} FCFA</h3>}
    </div>
  );
}
