"use client";

import { useParams } from "next/navigation";

export default function CommandePage() {

  const params = useParams();
  const id = params.id as string;

  return (
    <div style={{ padding: 40 }}>
      <h1>📦 Suivi de commande</h1>

      <p>ID de la commande :</p>

      <h2>{id}</h2>

      <p>Statut : Confirmée</p>
    </div>
  );
}
