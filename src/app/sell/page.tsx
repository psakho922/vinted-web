"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SellPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div style={{ padding: 40 }}>
      <h1>Page Sell</h1>
      <p>Tu es connecté, tu peux vendre un produit.</p>
    </div>
  );
}
