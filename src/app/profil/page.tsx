"use client";

import Link from "next/link";

export default function ProfilPage() {
  return (
    <div style={{ padding: "20px" }}>
      {/* MENU */}
      <nav style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <Link href="/">Home</Link>
        <Link href="/sell">Sell</Link>
        <Link href="/profil">Profil</Link>
      </nav>

      <h1>Mon Profil</h1>

      <div style={{ marginTop: "20px" }}>
        <p><strong>Nom :</strong> Utilisateur</p>
        <p><strong>Email :</strong> utilisateur@email.com</p>
        <p><strong>Statut :</strong> Vendeur</p>
      </div>
    </div>
  );
}
