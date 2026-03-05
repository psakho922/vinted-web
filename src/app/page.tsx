"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {

  const [products,setProducts] = useState<any[]>([]);

  useEffect(()=>{

    fetch(process.env.NEXT_PUBLIC_API_URL + "/products")
    .then(res=>res.json())
    .then(data=>setProducts(data));

  },[]);

  return(

    <div style={{padding:40}}>

      <h1>Marketplace</h1>

      {products.length === 0 && (
        <p>Aucun produit pour le moment</p>
      )}

      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fill,220px)",
          gap:30,
          marginTop:30
        }}
      >

        {products.map((p:any)=>(

          <div
            key={p.id}
            style={{
              border:"1px solid #ddd",
              borderRadius:10,
              padding:10
            }}
          >

            <img
              src={p.image}
              style={{
                width:"100%",
                borderRadius:10
              }}
            />

            <h3>{p.title}</h3>

            <p style={{fontWeight:"bold"}}>
              {p.price} FCFA
            </p>

            <Link
              href={"/product/" + p.id}
              style={{
                background:"#00a884",
                color:"white",
                padding:"6px 12px",
                borderRadius:6,
                textDecoration:"none"
              }}
            >
              Voir le produit
            </Link>

          </div>

        ))}

      </div>

    </div>

  );

}
