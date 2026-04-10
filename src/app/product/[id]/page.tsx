"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductPage(){

  const params = useParams();
  const id = params?.id;

  const [product,setProduct] = useState<any>(null);

  useEffect(()=>{

    const products = JSON.parse(localStorage.getItem("products") || "[]");

    const found = products.find((p:any)=>p.id == id);

    setProduct(found);

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
    return <p>Produit introuvable</p>;
  }

  return(

    <div style={{padding:"20px"}}>

      <img
        src={product.image}
        width="300"
        style={{borderRadius:"10px"}}
      />

      <h2>{product.title}</h2>

      <p style={{fontWeight:"bold", color:"#09b1ba"}}>
        {product.price} FCFA
      </p>

      {/* 🛒 ACHETER */}
      <button
        onClick={addToCart}
        style={{
          marginTop:"15px",
          padding:"12px",
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
          marginTop:"15px",
          padding:"12px",
          background:"red",
          color:"#fff",
          border:"none",
          borderRadius:"8px"
        }}
      >
        Supprimer
      </button>

      {/* 👤 PROFIL VENDEUR */}
      <div style={{marginTop:"20px"}}>
        <Link href="/profil">
          <button style={{
            padding:"10px",
            background:"#000",
            color:"#fff",
            border:"none",
            borderRadius:"8px"
          }}>
            Voir profil vendeur
          </button>
        </Link>
      </div>

    </div>

  );

}
