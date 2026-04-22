"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home(){

  const [products,setProducts] = useState<any[]>([]);

  useEffect(()=>{

    fetch("/products.json")
      .then(res => res.json())
      .then(data => {

        const local = JSON.parse(localStorage.getItem("products") || "[]");

        // fusion JSON + localStorage
        setProducts([...data, ...local]);

      })
      .catch(()=>{

        const local = JSON.parse(localStorage.getItem("products") || "[]");
        setProducts(local);

      });

  },[]);

  return(

    <div style={{padding:"20px", background:"#f5f5f5", minHeight:"100vh"}}>

      <h1>Marketplace</h1>

      {products.length === 0 && <p>Aucun produit</p>}

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
            borderRadius:"15px",
            boxShadow:"0 4px 10px rgba(0,0,0,0.1)"
          }}>

            <img
              src={product.image || "https://picsum.photos/300"}
              style={{
                width:"100%",
                height:"200px",
                objectFit:"cover",
                borderRadius:"10px"
              }}
            />

            <h3>{product.title}</h3>

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
