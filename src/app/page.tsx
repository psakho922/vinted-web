"use client";

import { useEffect, useState } from "react";

export default function PanierPage(){

  const [cart,setCart] = useState([]);

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

  const total = cart.reduce((sum:any,item:any)=>sum + item.price,0);

  const commission = total * 0.1;

  const finalTotal = total + commission;

  return(

    <div>

      <h2>Mon panier</h2>

      {cart.length === 0 && <p>Panier vide</p>}

      {cart.map((item:any,index:number)=>(

        <div
          key={index}
          style={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            marginBottom:"15px",
            padding:"10px",
            background:"#fff",
            borderRadius:"10px"
          }}
        >

          <div>
            <p>{item.title}</p>
            <p>{item.price} FCFA</p>
          </div>

          <button
            onClick={()=>removeItem(index)}
            style={{
              background:"red",
              color:"#fff",
              border:"none",
              padding:"5px 10px",
              borderRadius:"5px"
            }}
          >
            Supprimer
          </button>

        </div>

      ))}

      {cart.length > 0 && (

        <div style={{marginTop:"30px"}}>

          <p>Total : {total} FCFA</p>
          <p>Commission (10%) : {commission} FCFA</p>

          <h3>Total à payer : {finalTotal} FCFA</h3>

        </div>

      )}

    </div>

  );

}
