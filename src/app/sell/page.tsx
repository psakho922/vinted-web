"use client";

import { useState } from "react";

export default function SellPage(){

  const [title,setTitle] = useState("");
  const [price,setPrice] = useState("");
  const [image,setImage] = useState("");

  const handleSubmit = () => {

    const newProduct = {
      id: Date.now(),
      title,
      price,
      image
    };

    let products = JSON.parse(localStorage.getItem("products") || "[]");

    products.push(newProduct);

    localStorage.setItem("products", JSON.stringify(products));

    alert("Produit ajouté 🔥");

    setTitle("");
    setPrice("");
    setImage("");
  };

  return(

    <div style={{padding:"20px"}}>

      <h2>Publier un produit</h2>

      <input
        placeholder="Nom produit"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        style={{display:"block", marginBottom:"10px"}}
      />

      <input
        placeholder="Prix"
        value={price}
        onChange={(e)=>setPrice(e.target.value)}
        style={{display:"block", marginBottom:"10px"}}
      />

      <input
        placeholder="Lien image (optionnel)"
        value={image}
        onChange={(e)=>setImage(e.target.value)}
        style={{display:"block", marginBottom:"10px"}}
      />

      <button onClick={handleSubmit}>
        Publier
      </button>

    </div>

  );

}
