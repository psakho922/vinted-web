"use client";

import { useEffect, useState } from "react";

export default function PanierPage(){

  const [cart,setCart] = useState<any[]>([]);

  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(data);
  },[]);

  const removeItem = (index:number) => {

    let newCart = [...cart];
    newCart.splice(index,1);

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  // ✅ CALCULS
  const total = cart.reduce((sum,item)=> sum + Number(item.price),0);
  const commission = Math.round(total * 0.1);
  const finalTotal = total + commission;

  return(

    <div style={{padding:"20px"}}>

      <h2>Mon panier</h2>

      {cart.length === 0 && <p>Panier vide</p>}

      {cart.map((item,index)=>(

        <div
          key={index}
          style={{
            display:"flex",
            justifyContent:"space-between",
            marginBottom:"10px",
            background:"#fff",
            padding:"10px",
            borderRadius:"10px"
          }}
        >

          <div>
            <p>{item.title}</p>
            <p>{item.price} FCFA</p>
          </div>

          <button onClick={()=>removeItem(index)}>
            Supprimer
          </button>

        </div>

      ))}

      {/* ✅ AFFICHAGE COMMISSION */}
      {cart.length > 0 && (

        <div style={{marginTop:"20px"}}>

          <p><strong>Total :</strong> {total} FCFA</p>

          <p style={{color:"#09b1ba"}}>
            <strong>Commission (10%) :</strong> {commission} FCFA
          </p>

          <h3>Total à payer : {finalTotal} FCFA</h3>

        </div>

      )}

    </div>

  );

}
