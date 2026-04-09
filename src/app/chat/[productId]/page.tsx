"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ChatPage(){

  const params = useParams();
  const productId = params?.productId;

  const [message,setMessage] = useState("");
  const [messages,setMessages] = useState<any[]>([]);

  // 🔄 charger messages
  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem("messages") || "[]");
    setMessages(data.filter((m:any)=>m.productId === productId));
  },[productId]);

  // 📤 envoyer message
  const sendMessage = () => {

    if(!message) return;

    const newMessage = {
      productId,
      text: message,
      date: new Date().toLocaleString()
    };

    let allMessages = JSON.parse(localStorage.getItem("messages") || "[]");

    allMessages.push(newMessage);

    localStorage.setItem("messages", JSON.stringify(allMessages));

    setMessages([...messages,newMessage]);
    setMessage("");
  };

  return(

    <div style={{padding:"20px"}}>

      <h2>Chat vendeur</h2>

      {messages.map((msg,index)=>(
        <div key={index} style={{
          background:"#eee",
          padding:"10px",
          borderRadius:"10px",
          marginBottom:"10px"
        }}>
          <p>{msg.text}</p>
          <small>{msg.date}</small>
        </div>
      ))}

      <div style={{marginTop:"20px"}}>

        <input
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          placeholder="Écrire..."
          style={{padding:"10px", width:"70%"}}
        />

        <button onClick={sendMessage}>
          Envoyer
        </button>

      </div>

    </div>

  );

}
