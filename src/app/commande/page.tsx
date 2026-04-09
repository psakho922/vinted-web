"use client";

import { useEffect, useState } from "react";

export default function CommandePage(){

  const [orders,setOrders] = useState<any[]>([]);

  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(data);
  },[]);

  return(

    <div style={{padding:"20px"}}>

      <h2>Mes commandes</h2>

      {orders.length === 0 && <p>Aucune commande</p>}

      {orders.map((order,index)=>(

        <div
          key={index}
          style={{
            background:"#fff",
            padding:"15px",
            borderRadius:"10px",
            marginBottom:"15px"
          }}
        >

          <p><strong>Total :</strong> {order.total} FCFA</p>
          <p><strong>Date :</strong> {order.date}</p>

        </div>

      ))}

    </div>

  );

}
