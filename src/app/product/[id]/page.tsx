"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function ProductPage() {

  const params = useParams();
  const id = params.id as string;

  const [product, setProduct] = useState<any>(null);

  useEffect(() => {

    fetch(process.env.NEXT_PUBLIC_API_URL + "/products/" + id)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });

  }, [id]);

  function addToCart() {

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Produit ajouté au panier");

  }

  async function deleteProduct() {

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Tu dois être connecté");
      return;
    }

    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/products/" + id,
      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + token
        }
      }
    );

    if (res.ok) {

      alert("Produit supprimé");

      window.location.href = "/";

    } else {

      alert("Erreur suppression");

    }

  }

  if (!product) return <p>Chargement...</p>;

  return (

    <div style={{ padding: 40 }}>

      <h1>{product.title}</h1>

      <img
        src={product.image}
        width="400"
        style={{ marginTop: 20 }}
      />

      <p style={{ fontSize: 20 }}>
        {product.price} FCFA
      </p>

      <br/>

      <button
        onClick={addToCart}
        style={{ padding:10 }}
      >
        Ajouter au panier
      </button>

      <br/><br/>

      <Link href="/acheter">
        <button style={{ padding:10 }}>
          Acheter
        </button>
      </Link>

      <br/><br/>

      <Link href={"/seller/" + product.userId}>
        <button>
          Profil vendeur
        </button>
      </Link>

      <br/><br/>

      <button
        onClick={deleteProduct}
        style={{ background: "red", color: "white", padding:10 }}
      >
        Supprimer
      </button>

    </div>

  );
}
