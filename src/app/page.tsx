"use client";

import { useEffect, useState } from "react";

export default function HomePage(){

  const [products,setProducts] = useState<any[]>([]);

  useEffect(()=>{

    const data = JSON.parse(localStorage.getItem("products") || "[]");

    // 🔥 SI VIDE → AJOUT PRODUITS PAR DÉFAUT
    if(data.length === 0){

      const defaultProducts = [
        {
          id: 1,
          title: "Sac Nike",
          price: 10000,
          image: "https://via.placeholder.com/300"
        },
        {
          id: 2,
          title: "T-shirt",
          price: 5000,
          image: "https://via.placeholder.com/300"
        }
      ];

      localStorage.setItem("products", JSON.stringify(defaultProducts));
      setProducts(defaultProducts);

    } else {

      setProducts(data);

    }

  },[]);

  const addToCart = (product:any) => {

    let cart = JSON.parse(localStorage.getItem("cart") || "[]");

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Produit ajouté au panier !");
  };

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
              borderRadius:"15px",
              boxShadow:"0 10px 20px rgba(0,0,0,0.05)"
            }}>

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

            </div>

          ))}

        </div>

      )}

    </div>

  );

}
