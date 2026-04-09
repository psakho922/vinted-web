"use client";

import { useEffect, useState } from "react";

export default function Profil(){

  const [user,setUser] = useState<any>(null);

  useEffect(()=>{
    const u = JSON.parse(localStorage.getItem("user") || "null");
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

        <div>
          <p>Tu n'es pas connecté</p>
          <a href="/login">
            <button>Se connecter</button>
          </a>
        </div>

      ) : (

        <div
          style={{
            background:"#fff",
            padding:"25px",
            borderRadius:"15px",
            boxShadow:"0 10px 30px rgba(0,0,0,0.05)",
            maxWidth:"400px"
          }}
        >

          {/* 👤 AVATAR */}
          <div style={{textAlign:"center"}}>
            <img
              src="https://i.pravatar.cc/150"
              style={{
                width:"100px",
                height:"100px",
                borderRadius:"50%",
                marginBottom:"15px"
              }}
            />
          </div>

          {/* INFOS */}
          <h3 style={{textAlign:"center"}}>
            {user.name || "Utilisateur"}
          </h3>

          <p style={{textAlign:"center", color:"#666"}}>
            {user.email}
          </p>

          {/* BOUTON */}
          <button
            onClick={logout}
            style={{
              marginTop:"20px",
              padding:"12px",
              width:"100%",
              background:"red",
              color:"#fff",
              border:"none",
              borderRadius:"8px"
            }}
          >
            Se déconnecter
          </button>

        </div>

      )}

    </div>

  );

}
