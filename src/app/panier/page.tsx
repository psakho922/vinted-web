"use client";

import { useEffect, useState } from "react";

export default function PaiementPage(){

  const [cart,setCart] = useState<any[]>([]);

  useEffect(()=>{

    const data = JSON.parse(localStorage.getItem("cart") || "[]");

    console.log("PANIER:", data); // 🔥 debug

    setCart(data);

  },[]);

  const total = cart.reduce((sum,item)=> sum + Number(item.price || 0),0);
  const commission = Math.round(total * 0.1);
  const finalTotal = total + commission;

  return(

    <div style={{padding:"20px"}}>

      <h2>Paiement</h2>

      {/* 🔥 PRODUITS */}
      {cart.map((item,index)=>(
        <div key={index}>
          <p>{item.title} - {item.price} FCFA</p>
        </div>
      ))}

      <p>Total : {total} FCFA</p>
      <p>Commission : {commission} FCFA</p>

      <h3>Total à payer : {finalTotal} FCFA</h3>

    </div>

  );

}
