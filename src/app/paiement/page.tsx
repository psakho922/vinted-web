"use client";

import { useRouter } from "next/navigation";

export default function PaiementPage() {

  const router = useRouter();

  function confirmer() {

    alert("Commande confirmée");

    router.push("/commande/test");

  }

  return (

    <div style={{ padding: 40 }}>

      <h1>Paiement</h1>

      <h2>Payer avec Wave ou Orange Money</h2>

      <br/>

      <p>📱 Numéro Wave :</p>

      <h3>77 000 00 00</h3>

      <br/>

      <p>📱 Numéro Orange Money :</p>

      <h3>77 000 00 00</h3>

      <br/>

      <p>Nom du compte :</p>

      <h3>Bibani Boutique</h3>

      <br/>

      <p>
        1️⃣ Ouvre Wave ou Orange Money  
      </p>

      <p>
        2️⃣ Envoie le montant du produit  
      </p>

      <p>
        3️⃣ Clique sur confirmer après paiement  
      </p>

      <br/>

      <button
        onClick={confirmer}
        style={{
          padding: 15,
          background: "green",
          color: "white",
          border: "none",
          borderRadius: 5,
          fontSize: 16
        }}
      >
        J'ai payé
      </button>

    </div>

  );

}
