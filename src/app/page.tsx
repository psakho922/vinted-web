"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home(){

  const [products,setProducts] = useState<any[]>([]);

  useEffect(()=>{
    fetch("/products.json")
      .then(res => res.json())
      .then(data => setProducts(data));
  },[]);

  return(

    <div style={{padding:"20px", background:"#f5f5f5", minHeight:"100vh"}}>

      <h1 style={{marginBottom:"20px"}}>Marketplace</h1>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))",
        gap:"20px"
      }}>

        {products.map((product)=>(
          <div key={product.id} style={{
            background:"#fff",
            padding:"15px",
            borderRadius:"15px",
            boxShadow:"0 4px 10px rgba(0,0,0,0.1)"
          }}>

            {/* IMAGE */}
            <img
              src={product.image || "https://picsum.photos/300"}
              style={{
                width:"100%",
                height:"200px",
                objectFit:"cover",
                borderRadius:"10px"
              }}
            />

            <h3 style={{marginTop:"10px"}}>
              {product.title}
            </h3>

            <p style={{color:"#09b1ba", fontWeight:"bold"}}>
              {product.price} FCFA
            </p>

            <Link href={"/product/" + product.id}>
              <button style={{
                marginTop:"10px",
                width:"100%",
                padding:"10px",
                background:"#09b1ba",
                color:"#fff",
                border:"none",
                borderRadius:"8px"
              }}>
                Voir produit
              </button>
            </Link>

          </div>
        ))}

      </div>

    </div>

  );

}
