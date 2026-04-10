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

      <img src={product.image} width="300" />

      <h2>{product.title}</h2>

      <p style={{fontWeight:"bold", color:"#09b1ba"}}>
        {product.price} FCFA
      </p>

      {/* 👤 VENDEUR */}
      <div style={{
        marginTop:"10px",
        background:"#f5f5f5",
        padding:"10px",
        borderRadius:"10px"
      }}>
        <p><strong>Vendeur :</strong> {product.sellerName || "Non défini"}</p>
        <p><strong>Téléphone :</strong> {product.sellerPhone || "Non défini"}</p>
      </div>

      {/* 🔗 PROFIL VENDEUR */}
      <div style={{marginTop:"20px"}}>
        <Link href={"/seller/" + product.id}>
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
