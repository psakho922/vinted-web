"use client";

import { useEffect, useState } from "react";

export default function Messages(){

  const [messages,setMessages] = useState<any[]>([]);

  useEffect(()=>{
    if(typeof window !== "undefined"){
      const data = JSON.parse(localStorage.getItem("messages") || "[]");
      setMessages(data);
    }
  },[]);

  return(

    <div style={{padding:"20px"}}>

      <h2>Messages reçus 💬</h2>

      {messages.length === 0 && <p>Aucun message</p>}

      {messages.map((msg,index)=>(

        <div
          key={index}
          style={{
            background:"#fff",
            padding:"15px",
            borderRadius:"10px",
            marginBottom:"10px"
          }}
        >

          <p><strong>Produit :</strong> {msg.productId}</p>
          <p>{msg.text}</p>
          <small>{msg.date}</small>

        </div>

      ))}

    </div>

  );

}
