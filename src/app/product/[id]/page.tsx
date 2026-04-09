"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductPage(){

  const params = useParams();
  const id = params?.id;

  const [product,setProduct] = useState<any>(null);

  useEffect(()=>{

    fetch("https://vinted-api-clean.onrender.com/products")
      .then(res=>res.json())
      .then(data=>{
        const found = data.find((p:any)=>p.id == id);
        setProduct(found);
      });

  },[id]);

  const addToCart = () => {

    let cart = JSON.parse(localStorage.getItem("cart") || "[]");

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Produit ajouté au panier !");
  };

  const deleteProduct = () => {

    let products = JSON.parse(localStorage.getItem("products") || "[]");

    const updated = products.filter((p:any)=>p.id != product.id);

    localStorage.setItem("products", JSON.stringify(updated));

    alert("Produit supprimé ❌");

    window.location.href = "/";
  };

  if(!product){
    return <p>Chargement...</p>;
  }

  return(

    <div style={{padding:"20px"}}>

      <img
        src={product.image}
        width="300"
        style={{borderRadius:"10px"}}
      />

      <h2>{product.title}</h2>

      <p>{product.price} FCFA</p>

      {/* 🛒 ACHETER */}
      <button
        onClick={addToCart}
        style={{
          marginTop:"10px",
          padding:"10px",
          background:"#09b1ba",
          color:"#fff",
          border:"none",
          borderRadius:"8px",
          marginRight:"10px"
        }}
      >
        Acheter
      </button>

      {/* ❌ SUPPRIMER */}
      <button
        onClick={deleteProduct}
        style={{
          marginTop:"10px",
          padding:"10px",
          background:"red",
          color:"#fff",
          border:"none",
          borderRadius:"8px"
        }}
      >
        Supprimer
      </button>

    </div>

  );

}
