"use client";

import { useEffect, useState } from "react";

export default function HomePage(){

  const [products,setProducts] = useState<any[]>([]);

  useEffect(()=>{

    // 🧠 1. Produits ajoutés depuis SELL
    const localProducts = JSON.parse(localStorage.getItem("products") || "[]");

    // 🌐 2. Produits API
    fetch("https://vinted-api-clean.onrender.com/products")
      .then(res=>res.json())
      .then(apiProducts=>{

        // 🔥 fusionner API + local
        const allProducts = [...localProducts, ...apiProducts];

        setProducts(allProducts);
      })
      .catch(err=>{
        console.log(err);

        // ⚠️ si API échoue → afficher local seulement
        setProducts(localProducts);
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

        {products.map((product:any, index:number)=>(

          <div key={index} style={{
            background:"#fff",
            padding:"15px",
            borderRadius:"15px"
          }}>

            <img
              src={product.image || "https://via.placeholder.com/300"}
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
