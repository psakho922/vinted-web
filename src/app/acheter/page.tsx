"use client";

import { useState } from "react";

export default function AcheterPage() {

  const [method, setMethod] = useState("");

  function payer() {

    if (!method) {
      alert("Choisissez un moyen de paiement");
      return;
    }

    alert("Paiement réussi avec " + method);

    window.location.href = "/commande";

  }

  return (

    <div style={{ padding: 40 }}>

      <h1>Paiement</h1>

      <p>Choisissez un moyen de paiement :</p>

      <br />

      <button
        onClick={() => setMethod("Wave")}
        style={{ padding: 10, marginRight: 10 }}
      >
        Wave
      </button>

      <button
        onClick={() => setMethod("Orange Money")}
        style={{ padding: 10 }}
      >
        Orange Money
      </button>

      <br /><br />

      <button
        onClick={payer}
        style={{
          background: "#00a884",
          color: "white",
          padding: "10px 20px",
          borderRadius: 8
        }}
      >
        Payer
      </button>

    </div>

  );

}
