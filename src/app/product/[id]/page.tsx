"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductPage(){

  const params = useParams();
  const id = Number(params?.id);

  const [product,setProduct] = useState<any>(null);

  useEffect(()=>{

    fetch("/products.json")
      .then(res => res.json())
      .then(data => {
        const found = data.find((p:any)=> p.id === id);
        setProduct(found);
      });

  },[id]);

  if(!product){
    return <p>Chargement...</p>;
  }

  return(

    <div style={{padding:"20px"}}>

      <img src={product.image} width="300" />

      <h2>{product.title}</h2>
      <p>{product.price} FCFA</p>

      <p>Vendeur : {product.sellerName}</p>
      <p>Téléphone : {product.sellerPhone}</p>

    </div>

  );

}
