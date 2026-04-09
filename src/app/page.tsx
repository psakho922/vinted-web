"use client";

import { useEffect, useState } from "react";

export default function HomePage(){

  const [products,setProducts] = useState([]);

  useEffect(()=>{

    fetch(process.env.NEXT_PUBLIC_API_URL + "/products")
      .then(res=>res.json())
      .then(data=>{

        setProducts(data);

      });

  },[]);

  const addToCart = (product:any) => {

    let cart = JSON.parse(localStorage.getItem("cart") || "[]");

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Produit ajouté au panier !");
  };

  return(

    <div>

      <h2>Marketplace</h2>

      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))",
          gap:"20px",
          marginTop:"20px"
        }}
      >

        {products.map((product:any)=>(

          <div
            key={product.id}
            style={{
              background:"#fff",
              padding:"15px",
              borderRadius:"10px",
              boxShadow:"0 5px 10px rgba(0,0,0,0.1)"
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

            <p>{product.price} FCFA</p>

            <button onClick={()=>addToCart(product)}>
              Ajouter au panier
            </button>

          </div>

        ))}

      </div>

    </div>

  );

}
