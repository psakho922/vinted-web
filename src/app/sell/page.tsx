"use client";

import { useState } from "react";

export default function SellPage(){

  const [title,setTitle] = useState("");
  const [price,setPrice] = useState("");
  const [image,setImage] = useState("");

  // convertir image en base64
  const handleImage = (e:any) => {

    const file = e.target.files[0];

    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result as string);
    };

    if(file){
      reader.readAsDataURL(file);
    }
  };

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

    alert("Produit publié 🔥");

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
      />

      <input
        placeholder="Prix"
        value={price}
        onChange={(e)=>setPrice(e.target.value)}
      />

      {/* UPLOAD IMAGE */}
      <input type="file" accept="image/*" onChange={handleImage} />

      {/* PREVIEW */}
      {image && (
        <img
          src={image}
          style={{width:"200px", marginTop:"10px"}}
        />
      )}

      <button onClick={handleSubmit} style={{display:"block", marginTop:"10px"}}>
        Publier
      </button>

    </div>

  );

}
