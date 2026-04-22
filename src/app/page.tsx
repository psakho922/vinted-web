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

    <div style={{padding:"20px"}}>

      <h1>Marketplace</h1>

      {products.length === 0 && <p>Aucun produit</p>}

      <div style={{display:"grid", gap:"20px"}}>

        {products.map((product)=>(
          <div key={product.id}>

            <img src={product.image} width="200" />

            <h3>{product.title}</h3>
            <p>{product.price} FCFA</p>

            <Link href={"/product/" + product.id}>
              <button>Voir produit</button>
            </Link>

          </div>
        ))}

      </div>

    </div>

  );

}
