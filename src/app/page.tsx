"use client";

import { useEffect, useState } from "react";

export default function HomePage(){

  const [products,setProducts] = useState<any[]>([]);

  useEffect(()=>{

    // ⚡ Charger localStorage
    const local = JSON.parse(localStorage.getItem("products") || "[]");

    if(local.length > 0){
      setProducts(local);
    }

    // 🌐 Charger API
    fetch("https://vinted-api-clean.onrender.com/products")
      .then(res=>res.json())
      .then(data=>{
        setProducts(data);
        localStorage.setItem("products", JSON.stringify(data));
      })
      .catch(err=>{
        console.log(err);
      });

  },[]);

  return(

    <div style={{padding:"20px"}}>

      <h1>Marketplace</h1>

      {products.length === 0 && (
        <p>Chargement des produits...</p>
      )}

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))",
        gap:"20px",
        marginTop:"20px"
      }}>

        {products.map((product:any)=>(

          <div key={product.id} style={{
            background:"#fff",
            padding:"15px",
            borderRadius:"15px"
          }}>

            <img
              src={product.image}
              width="100%"
              style={{height:"200px", objectFit:"cover"}}
            />

            <h3>{product.title}</h3>

            <p>{product.price} FCFA</p>

          </div>

        ))}

      </div>

    </div>

  );

}
