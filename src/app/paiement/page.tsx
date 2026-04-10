"use client";

import { useEffect, useState } from "react";

export default function PaiementPage(){

  const [cart,setCart] = useState<any[]>([]);

  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(data);
  },[]);

  const total = cart.reduce((sum,item)=> sum + Number(item.price),0);
  const commission = Math.round(total * 0.1);
  const finalTotal = total + commission;

  const confirmerPaiement = () => {

    let orders = JSON.parse(localStorage.getItem("orders") || "[]");

    const newOrder = {
      total: finalTotal,
      date: new Date().toLocaleString(),
      status: "en attente"
    };

    orders.push(newOrder);

    localStorage.setItem("orders", JSON.stringify(orders));

    localStorage.removeItem("cart");

    alert("Paiement enregistré ✅ (en attente de confirmation)");

    window.location.href = "/commande";
  };

  return(

    <div style={{padding:"20px"}}>

      <h2>Paiement</h2>

      <p>Total : {total} FCFA</p>
      <p>Commission : {commission} FCFA</p>

      <h3>Total à payer : {finalTotal} FCFA</h3>

      {/* 💳 INFOS PAIEMENT */}
      <div style={{
        marginTop:"20px",
        padding:"15px",
        background:"#fff",
        borderRadius:"10px"
      }}>

        <h3>Paiement Mobile Money</h3>

        <p><strong>Wave :</strong> 77 123 45 67</p>
        <p><strong>Orange Money :</strong> 77 123 45 67</p>

        <p style={{marginTop:"10px"}}>
          👉 Envoyez le montant exact puis cliquez sur “J’ai payé”
        </p>

      </div>

      {/* ✅ CONFIRMATION */}
      <button
        onClick={confirmerPaiement}
        style={{
          marginTop:"20px",
          padding:"15px",
          background:"#09b1ba",
          color:"#fff",
          border:"none",
          borderRadius:"10px",
          width:"100%"
        }}
      >
        J’ai payé
      </button>

    </div>

  );

}
