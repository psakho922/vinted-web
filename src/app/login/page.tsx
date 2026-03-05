"use client";

import { useState } from "react";

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      }
    );

    const data = await res.json();

    if (res.ok) {

      // sauvegarde du token
      localStorage.setItem("token", data.access_token);

      alert("Login réussi");

      window.location.href = "/sell";

    } else {
      alert("Erreur login");
    }
  }

  return (
    <div style={{ padding: 40 }}>

      <h1>Login</h1>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit">
          Se connecter
        </button>

      </form>

    </div>
  );
}
