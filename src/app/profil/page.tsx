"use client";

import { useEffect, useState } from "react";

export default function Profil(){

  const [user,setUser] = useState<string | null>(null);

  useEffect(()=>{
    const u = localStorage.getItem("user");
    setUser(u);
  },[]);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    alert("Déconnecté");
  };

  return(

    <div style={{padding:"20px"}}>

      <h2>Mon profil</h2>

      {!user ? (

        <div
          style={{
            background:"#fff",
            padding:"20px",
            borderRadius:"15px"
          }}
        >
          <p>Tu n'es pas connecté</p>

          <a href="/login">
            <button
              style={{
                padding:"10px",
                background:"#09b1ba",
                color:"#fff",
                border:"none",
                borderRadius:"5px"
              }}
            >
              Se connecter
            </button>
          </a>
        </div>

      ) : (

        <div
          style={{
            background:"#fff",
            padding:"20px",
            borderRadius:"15px",
            boxShadow:"0 5px 20px rgba(0,0,0,0.05)"
          }}
        >

          <h3>Utilisateur connecté ✅</h3>

          <p>Email : user@gmail.com</p>

          <button
            onClick={logout}
            style={{
              marginTop:"10px",
              padding:"10px",
              background:"red",
              color:"#fff",
              border:"none",
              borderRadius:"5px"
            }}
          >
            Se déconnecter
          </button>

        </div>

      )}

    </div>

  );

}
