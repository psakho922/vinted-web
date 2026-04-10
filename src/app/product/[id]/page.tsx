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
    const found = products.find((p:any)=> p.id == id);
    setProduct(found);
  },[id]);

  if(!product){
    return <p>Produit introuvable</p>;
  }

  return(

    <div style={{padding:"20px"}}>

      {/* 🔥 TEST */}
      <h1 style={{color:"red"}}>PAGE PRODUIT</h1>

      <img src={product.image} width="300" />

      <h2>{product.title}</h2>
      <p>{product.price} FCFA</p>

      {/* 👤 INFOS VENDEUR */}
      <p>Vendeur : {product.sellerName}</p>
      <p>Téléphone : {product.sellerPhone}</p>

      {/* 🔥 BOUTON PROFIL */}
      <div style={{marginTop:"20px"}}>
        <Link href={"/seller/" + product.id}>
          <button style={{
            padding:"15px",
            background:"blue",
            color:"#fff",
            border:"none",
            borderRadius:"10px"
          }}>
            PROFIL VENDEUR
          </button>
        </Link>
      </div>

    </div>

  );

}
