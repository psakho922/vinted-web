"use client";

import { useState } from "react";

export default function LoginPage() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [message,setMessage] = useState("");

  async function handleLogin(e:any){

    e.preventDefault();

    try{

      const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/auth/login",
        {
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            email,
            password
          })
        }
      );

      const data = await res.json();

      if(!res.ok){

        setMessage("Email ou mot de passe incorrect");
        return;

      }

      if(typeof window !== "undefined"){

        localStorage.setItem("token",data.access_token);

      }

      setMessage("Login réussi");

      window.location.href="/sell";

    }catch(err){

      setMessage("Erreur connexion serveur");

    }

  }

  return(

    <div style={{padding:40}}>

      <h1>Login</h1>

      <form onSubmit={handleLogin}>

        <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        required
        />

        <br/><br/>

        <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        required
        />

        <br/><br/>

        <button type="submit">

          Se connecter

        </button>

      </form>

      {message && (

        <p>{message}</p>

      )}

    </div>

  );

}
