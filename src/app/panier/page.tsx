"use client";

import { useEffect, useState } from "react";

export default function PanierPage() {

  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {

    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

  }, []);

  const total = cart.reduce((sum, p) => sum + p.price, 0);

  function removeItem(index:number){

    const newCart = [...cart];

    newCart.splice(index,1);

    setCart(newCart);

    localStorage.setItem("cart", JSON.stringify(newCart));

  }

  return (

    <div style={{padding:40}}>

      <h1>Mon panier</h1>

      {cart.length === 0 && <p>Panier vide</p>}

      {cart.map((product, index) => (

        <div key={index} style={{marginBottom:30}}>

          <img src={product.image} width="200"/>

          <h3>{product.title}</h3>

          <p>{product.price} FCFA</p>

          <button onClick={()=>removeItem(index)}>
            Supprimer
          </button>

        </div>

      ))}

      <h2>Total : {total} FCFA</h2>

    </div>

  );
}
