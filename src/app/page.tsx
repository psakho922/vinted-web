"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {

  const [products,setProducts] = useState<any[]>([]);
  const [search,setSearch] = useState("");
  const [category,setCategory] = useState("Toutes");

  useEffect(()=>{

    fetch(process.env.NEXT_PUBLIC_API_URL + "/products")
    .then(res=>res.json())
    .then(data=>setProducts(data));

  },[]);

  const filteredProducts = products.filter(product => {

    const matchSearch =
      product.title.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      category === "Toutes" || product.category === category;

    return matchSearch && matchCategory;

  });

  return (

    <div style={{padding:40}}>

      <h1>Marketplace</h1>

      <input
        placeholder="🔎 Rechercher..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        style={{
          padding:10,
          width:"100%",
          maxWidth:400,
          marginTop:20,
          marginBottom:20
        }}
      />

      <div style={{marginBottom:30}}>

        <button onClick={()=>setCategory("Toutes")}>
          Toutes
        </button>

        <button onClick={()=>setCategory("Chaussures")}>
          Chaussures
        </button>

        <button onClick={()=>setCategory("Vêtements")}>
          Vêtements
        </button>

        <button onClick={()=>setCategory("Sacs")}>
          Sacs
        </button>

        <button onClick={()=>setCategory("Accessoires")}>
          Accessoires
        </button>

      </div>

      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fill,250px)",
          gap:25
        }}
      >

      {filteredProducts.map(product => (

        <Link
          key={product.id}
          href={"/product/" + product.id}
          style={{
            border:"1px solid #eee",
            borderRadius:10,
            overflow:"hidden",
            textDecoration:"none",
            color:"black"
          }}
        >

          <img
            src={product.image}
            style={{
              width:"100%",
              height:220,
              objectFit:"cover"
            }}
          />

          <div style={{padding:15}}>

            <h3>{product.title}</h3>

            <p style={{
              color:"#00a884",
              fontWeight:"bold"
            }}>
              {product.price} FCFA
            </p>

            <p>{product.category}</p>

          </div>

        </Link>

      ))}

      </div>

    </div>

  );

}
