"use client";

import { useEffect, useState } from "react";

export default function Home(){

  const [products,setProducts] = useState<any[]>([]);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{

    fetch("/products.json")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.log("Erreur :", err);
        setLoading(false);
      });

  },[]);

  if(loading){
    return <p style={{padding:"20px"}}>Chargement...</p>;
  }

  return(

    <div style={{padding:"20px"}}>

      <h1>Marketplace</h1>

      {products.length === 0 && <p>Aucun produit</p>}

      {products.map((p)=>(
        <div key={p.id} style={{marginBottom:"20px"}}>
          <p>{p.title}</p>
          <p>{p.price} FCFA</p>
        </div>
      ))}

    </div>

  );

}
