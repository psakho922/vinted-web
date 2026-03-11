"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function ProductPage() {

  const params = useParams();
  const id = params.id as string;

  const [product,setProduct] = useState<any>(null);

  useEffect(()=>{

    fetch(process.env.NEXT_PUBLIC_API_URL + "/products/" + id)
      .then(res=>res.json())
      .then(data=>setProduct(data));

  },[id]);

  if(!product) return <p>Chargement...</p>;

  return(

    <div style={{padding:40}}>

      <h1>{product.title}</h1>

      <img
        src={product.image}
        width="400"
      />

      <p style={{fontSize:20}}>
        {product.price} FCFA
      </p>

      <br/>

      <Link href="/paiement">
        <button
          style={{
            padding:12,
            background:"#2563eb",
            color:"white",
            border:"none",
            borderRadius:6,
            cursor:"pointer",
            fontSize:16
          }}
        >
          Acheter
        </button>
      </Link>

      <br/><br/>

      <Link href={"/seller/" + product.userId}>
        <button>
          Profil vendeur
        </button>
      </Link>

    </div>

  );

}
