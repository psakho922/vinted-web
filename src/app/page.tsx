"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {

  const [products, setProducts] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const filteredProducts = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: 40 }}>

      <h1 style={{ fontSize: 30 }}>Marketplace</h1>

      <input
        placeholder="🔎 Rechercher un produit..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        style={{
          padding:10,
          width:"100%",
          maxWidth:400,
          marginTop:20,
          marginBottom:30,
          borderRadius:8,
          border:"1px solid #ccc"
        }}
      />

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
            textDecoration:"none",
            color:"black",
            border:"1px solid #eee",
            borderRadius:12,
            overflow:"hidden",
            boxShadow:"0 4px 10px rgba(0,0,0,0.05)"
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

          <div style={{ padding:15 }}>

            <h3>{product.title}</h3>

            <p style={{
              color:"#00a884",
              fontWeight:"bold",
              fontSize:18
            }}>
              {product.price} FCFA
            </p>

          </div>

        </Link>

      ))}

      </div>

    </div>
  );
}
