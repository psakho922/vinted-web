"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SellerPage(){

  const params = useParams();
  const id = params?.id;

  const [products,setProducts] = useState<any[]>([]);

  useEffect(()=>{

    const data = JSON.parse(localStorage.getItem("products") || "[]");

    const product = data.find((p:any)=> p.id == id);

    if(product){
      const sellerProducts = data.filter((p:any)=> p.sellerPhone === product.sellerPhone);
      setProducts(sellerProducts);
    }

  },[id]);

  if(products.length === 0){
    return <p>Aucun vendeur trouvé</p>;
  }

  return(

    <div style={{padding:"20px"}}>

      <h2>Profil vendeur</h2>

      <p><strong>Nom :</strong> {products[0].sellerName}</p>
      <p><strong>Téléphone :</strong> {products[0].sellerPhone}</p>

      <h3>Produits du vendeur</h3>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",
        gap:"15px",
        marginTop:"20px"
      }}>

        {products.map((product,index)=>(

          <div key={index} style={{
            background:"#fff",
            padding:"10px",
            borderRadius:"10px"
          }}>

            <img
              src={product.image}
              width="100%"
              style={{height:"150px", objectFit:"cover"}}
            />

            <p>{product.title}</p>
            <p>{product.price} FCFA</p>

          </div>

        ))}

      </div>

    </div>

  );

}
