"use client";

import { useEffect, useState } from "react";

export default function HomePage(){

  const [products,setProducts] = useState<any[]>([]);

  const loadProducts = () => {
    const data = JSON.parse(localStorage.getItem("products") || "[]");
    setProducts(data);
  };

  useEffect(()=>{
    loadProducts();

    // 🔄 recharge automatique
    const interval = setInterval(()=>{
      loadProducts();
    }, 1000);

    return () => clearInterval(interval);

  },[]);

  return(

    <div style={{padding:"20px"}}>

      <h1>Marketplace</h1>

      {products.length === 0 ? (
        <p>Aucun produit pour le moment</p>
      ) : (

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
                src={product.image}
                width="100%"
                style={{height:"200px", objectFit:"cover"}}
              />

              <h3>{product.title}</h3>

              <p>{product.price} FCFA</p>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}
