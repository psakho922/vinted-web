"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function OrderPage() {

  const params = useParams();
  const id = params.id as string;

  const [order, setOrder] = useState<any>(null);

  useEffect(() => {

    fetch(
      process.env.NEXT_PUBLIC_API_URL + "/orders/" + id
    )
      .then(res => res.json())
      .then(data => setOrder(data));

  }, [id]);

  if (!order) return <p>Chargement...</p>;

  return (

    <div style={{ padding: 40 }}>

      <h1>📦 Suivi de commande</h1>

      <p>Status :</p>

      <h2>{order.status}</h2>

    </div>

  );

}
