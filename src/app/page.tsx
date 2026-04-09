"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HomePage(){

  const [products,setProducts] = useState<any[]>([]);

  useEffect(()=>{
    fetch(process.env.NEXT_PUBLIC_API_URL + "/products")
      .then(res=>res.json())
      .then(data=>setProducts(data));
  },[]);

  const addToCart = (product:any) => {

    let cart = JSON.parse(localStorage.getItem("cart") || "[]");

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Produit ajouté au panier !");
  };

  return(

    <div>

      <h1>Marketplace</h1>

      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))",
          gap:"25px",
          marginTop:"20px"
        }}
      >

        {products.map((product:any)=>(

          <div
            key={product.id}
            style={{
              background:"#fff",
              padding:"15px",
              borderRadius:"15px",
              boxShadow:"0 10px 25px rgba(0,0,0,0.05)"
            }}
          >

            <img
              src={product.image}
              width="100%"
              style={{
                height:"200px",
                objectFit:"cover",
                borderRadius:"10px"
              }}
            />

            <h3>{product.title}</h3>

            <p style={{fontWeight:"bold", color:"#09b1ba"}}>
              {product.price} FCFA
            </p>

            {/* 🛒 PANIER */}
            <button
              onClick={()=>addToCart(product)}
              style={{
                marginTop:"10px",
                padding:"10px",
                width:"100%",
                background:"#09b1ba",
                color:"#fff",
                border:"none",
                borderRadius:"8px"
              }}
            >
              Ajouter au panier
            </button>

            {/* 💰 ACHETER */}
            <Link href={"/product/" + product.id}>
              <button
                style={{
                  marginTop:"10px",
                  padding:"10px",
                  width:"100%",
                  background:"#000",
                  color:"#fff",
                  border:"none",
                  borderRadius:"8px"
                }}
              >
                Voir / Acheter
              </button>
            </Link>

          </div>

        ))}

      </div>

    </div>

  );

}
