"use client";

import { useState } from "react";

export default function SellPage(){

  const [title,setTitle] = useState("");
  const [price,setPrice] = useState("");
  const [image,setImage] = useState("");
  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");

  const handleImage = (e:any) => {

    const file = e.target.files[0];

    if(file){
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {

    const newProduct = {
      id: Date.now(),
      title,
      price,
      image,
      sellerName: name,
      sellerPhone: phone
    };

    let products = JSON.parse(localStorage.getItem("products") || "[]");

    products.push(newProduct);

    localStorage.setItem("products", JSON.stringify(products));

    alert("Produit ajouté ✅");

    setTitle("");
    setPrice("");
    setImage("");
    setName("");
    setPhone("");
  };

  return(

    <div style={{padding:"20px"}}>

      <h2>Vendre un produit</h2>

      <input
        placeholder="Nom du produit"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        style={{display:"block", marginBottom:"10px", padding:"10px"}}
      />

      <input
        placeholder="Prix"
        value={price}
        onChange={(e)=>setPrice(e.target.value)}
        style={{display:"block", marginBottom:"10px", padding:"10px"}}
      />

      <input
        placeholder="Ton nom"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        style={{display:"block", marginBottom:"10px", padding:"10px"}}
      />

      <input
        placeholder="Numéro téléphone"
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
        style={{display:"block", marginBottom:"10px", padding:"10px"}}
      />

      <input
        type="file"
        accept="image/*"
        onChange={handleImage}
        style={{marginBottom:"10px"}}
      />

      {image && (
        <img src={image} width="200" />
      )}

      <button onClick={handleSubmit}>
        Publier
      </button>

    </div>

  );

}
