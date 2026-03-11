"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ChatPage() {

  const params = useParams();

  const productId = params.productId as string;

  const [messages, setMessages] = useState<any[]>([]);
  const [text, setText] = useState("");

  const senderId = "acheteur";
  const receiverId = "vendeur";

  useEffect(() => {

    fetch(
      process.env.NEXT_PUBLIC_API_URL +
      "/messages?productId=" + productId
    )
      .then(res => res.json())
      .then(data => setMessages(data));

  }, [productId]);

  async function sendMessage() {

    await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/messages",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          text,
          senderId,
          receiverId,
          productId
        })
      }
    );

    setText("");

    location.reload();

  }

  return (

    <div style={{ padding: 40 }}>

      <h1>Questions sur ce produit</h1>

      <div
        style={{
          border: "1px solid #ddd",
          padding: 20,
          height: 300,
          overflow: "auto",
          marginBottom: 20
        }}
      >

        {messages.map((m: any) => (

          <p key={m.id}>
            <strong>{m.senderId}</strong> : {m.text}
          </p>

        ))}

      </div>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Poser une question"
        style={{ padding: 10, width: "70%" }}
      />

      <button
        onClick={sendMessage}
        style={{
          padding: 10,
          marginLeft: 10
        }}
      >
        Envoyer
      </button>

    </div>

  );

}
