"use client";

import { useState } from "react";

export default function SellPage() {

  const [title,setTitle] = useState("");
  const [price,setPrice] = useState("");
  const [image,setImage] = useState("");
  const [category,setCategory] = useState("");

  async function handleSubmit(e:any){

    e.preventDefault();

    const token = localStorage.getItem("token");

    if(!token){
      alert("Tu dois être connecté");
      return;
    }

    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/products",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          Authorization:"Bearer " + token
        },
        body:JSON.stringify({
          title,
          price,
          image,
          category
        })
      }
    );

    if(res.ok){
      alert("Produit créé !");
      window.location.href="/";
    }else{
      alert("Erreur création produit");
    }

  }

  return(

    <div style={{padding:40}}>

      <h2>Vendre un produit</h2>

      <form onSubmit={handleSubmit}>

        <input
          placeholder="Titre"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          required
        />

        <br/><br/>

        <input
          placeholder="Prix"
          value={price}
          onChange={(e)=>setPrice(e.target.value)}
          required
        />

        <br/><br/>

        <input
          placeholder="URL image"
          value={image}
          onChange={(e)=>setImage(e.target.value)}
          required
        />

        <br/><br/>

        <select
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
          required
        >

          <option value="">Choisir catégorie</option>
          <option value="Chaussures">Chaussures</option>
          <option value="Vêtements">Vêtements</option>
          <option value="Sacs">Sacs</option>
          <option value="Accessoires">Accessoires</option>

        </select>

        <br/><br/>

        <button type="submit">
          Créer produit
        </button>

      </form>

    </div>

  );

}
