"use client";

import { useState } from "react";

type Produit = { id: number; nom: string; prix: number };

// 🔹 Remplace ce tableau par tes produits existants
const produits: Produit[] = [
  { id: 1, nom: "Produit A", prix: 10000 },
  { id: 2, nom: "Produit B", prix: 15000 },
  { id: 3, nom: "Produit C", prix: 20000 },
];

export default function Page() {
  const [cart, setCart] = useState<{ produit: Produit; total: number; quantite: number }[]>([]);
  const [view, setView] = useState<"marketplace" | "panier">("marketplace");

  // 🔹 Ajouter un produit au panier
  const ajouterAuPanier = (p: Produit) => {
    const total = p.prix * 1.1; // prix + commission 10%
    const existing = cart.find((item) => item.produit.id === p.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.produit.id === p.id
            ? { ...item, quantite: item.quantite + 1, total: item.total + total }
            : item
        )
      );
    } else {
      setCart([...cart, { produit: p, total, quantite: 1 }]);
    }
  };

  // 🔹 Supprimer un produit du panier
  const supprimerDuPanier = (id: number) =>
    setCart(cart.filter((item) => item.produit.id !== id));

  const totalPanier = cart.reduce((acc, item) => acc + item.total, 0);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {/* 🔹 Menu */}
      <nav style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <span style={{ cursor: "pointer", fontWeight: view === "marketplace" ? "bold" : "normal" }} onClick={() => setView("marketplace")}>
          Marketplace
        </span>
        <span style={{ cursor: "pointer", fontWeight: view === "panier" ? "bold" : "normal" }} onClick={() => setView("panier")}>
          Panier ({cart.length})
        </span>
      </nav>

      {/* 🔹 Marketplace */}
      {view === "marketplace" && (
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {produits.map((p) => (
            <div key={p.id} style={{ border: "1px solid #ccc", padding: "15px", width: "200px" }}>
              <h2>{p.nom}</h2>
              <p>Prix : {p.prix} FCFA</p>
              <p>Commission (10%) : {p.prix * 0.1} FCFA</p>
              <p>Total : {p.prix * 1.1} FCFA</p>
              <button
                onClick={() => ajouterAuPanier(p)}
                style={{
                  background: "#0070f3",
                  color: "white",
                  padding: "10px",
                  borderRadius: "5px",
                  marginTop: "10px",
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                Ajouter au panier
              </button>
            </div>
          ))}
        </div>
      )}

      {/* 🔹 Panier */}
      {view === "panier" && (
        <div>
          <h2>Panier</h2>
          {cart.length === 0 ? (
            <p>Votre panier est vide</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li key={item.produit.id}>
                  {item.produit.nom} x {item.quantite} - Total : {item.total} FCFA
                  <button
                    onClick={() => supprimerDuPanier(item.produit.id)}
                    style={{ marginLeft: "10px", color: "red", cursor: "pointer" }}
                  >
                    Supprimer
                  </button>
                </li>
              ))}
            </ul>
          )}
          {cart.length > 0 && <h3>Total Panier : {totalPanier} FCFA</h3>}
        </div>
      )}
    </div>
  );
}
