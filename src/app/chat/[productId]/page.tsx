"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

export default function ChatPage(){

  const params = useParams();
  const productId = params?.productId;

  const [message,setMessage] = useState("");
  const [messages,setMessages] = useState<string[]>([]);

  const sendMessage = () => {

    if(!message) return;

    setMessages([...messages,message]);
    setMessage("");
  };

  return(

    <div style={{padding:"20px"}}>

      <h2>Chat vendeur</h2>

      <p>Produit ID : {productId}</p>

      {/* messages */}
      <div style={{marginTop:"20px"}}>

        {messages.map((msg,index)=>(
          <p key={index} style={{
            background:"#eee",
            padding:"10px",
            borderRadius:"10px",
            marginBottom:"10px"
          }}>
            {msg}
          </p>
        ))}

      </div>

      {/* input */}
      <div style={{marginTop:"20px"}}>

        <input
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          placeholder="Écrire un message..."
          style={{
            padding:"10px",
            width:"70%",
            marginRight:"10px"
          }}
        />

        <button onClick={sendMessage}>
          Envoyer
        </button>

      </div>

    </div>

  );

}
