"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

export default function CommandePage(){

  const params = useParams();
  const id = params.id as string;

  const [status,setStatus] = useState("confirmée");

  return(

    <div style={{padding:40}}>

      <h1>📦 Suivi de commande</h1>

      <p>ID de commande :</p>

      <h2>{id}</h2>

      <br/>

      <h2>Status : {status}</h2>

      <br/>

      <button
        onClick={()=>setStatus("préparation")}
        style={{marginRight:10}}
      >
        Préparation
      </button>

      <button
        onClick={()=>setStatus("expédiée")}
        style={{marginRight:10}}
      >
        Expédiée
      </button>

      <button
        onClick={()=>setStatus("livrée")}
      >
        Livrée
      </button>

    </div>

  );

}
