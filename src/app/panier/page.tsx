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

  const total = cart.reduce((sum,item)=> sum + Number(item.price),0);
  const commission = Math.round(total * 0.1);
  const finalTotal = total + commission;

  // 💳 PAIEMENT + ENREGISTRER COMMANDE
  const payer = () => {

    const order = {
      total: finalTotal,
      date: new Date().toLocaleString()
    };

    let orders = JSON.parse(localStorage.getItem("orders") || "[]");

    orders.push(order);

    localStorage.setItem("orders", JSON.stringify(orders));

    alert("Paiement réussi ✅");

    localStorage.removeItem("cart");
    setCart([]);
  };

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

          <button onClick={()=>removeItem(index)}>
            Supprimer
          </button>

        </div>

      ))}

      {cart.length > 0 && (

        <div style={{marginTop:"20px"}}>

          <p><strong>Total :</strong> {total} FCFA</p>

          <p style={{color:"#09b1ba"}}>
            <strong>Commission :</strong> {commission} FCFA
          </p>

          <h3>Total à payer : {finalTotal} FCFA</h3>

          <button
            onClick={payer}
            style={{
              marginTop:"20px",
              padding:"15px",
              width:"100%",
              background:"#09b1ba",
              color:"#fff",
              border:"none",
              borderRadius:"10px"
            }}
          >
            Payer maintenant
          </button>

        </div>

      )}

    </div>

  );

}
