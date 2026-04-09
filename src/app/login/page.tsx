"use client";

import { useEffect, useState } from "react";

export default function Profil(){

  const [user,setUser] = useState<any>(null);

  useEffect(()=>{
    const u = localStorage.getItem("user");
    if(u){
      setUser(JSON.parse(u));
    }
  },[]);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    alert("Déconnecté");
  };

  return(

    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      minHeight:"80vh"
    }}>

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
            padding:"30px",
            borderRadius:"20px",
            boxShadow:"0 15px 40px rgba(0,0,0,0.08)",
            width:"300px",
            textAlign:"center"
          }}
        >

          {/* 👤 PHOTO */}
          <img
            src="https://i.pravatar.cc/150?img=12"
            style={{
              width:"100px",
              height:"100px",
              borderRadius:"50%",
              marginBottom:"15px"
            }}
          />

          {/* NOM */}
          <h2 style={{marginBottom:"5px"}}>
            {user.name}
          </h2>

          {/* EMAIL */}
          <p style={{color:"#777", marginBottom:"20px"}}>
            {user.email}
          </p>

          {/* BOUTON */}
          <button
            onClick={logout}
            style={{
              padding:"12px",
              width:"100%",
              background:"#ff4d4f",
              color:"#fff",
              border:"none",
              borderRadius:"10px",
              fontWeight:"bold"
            }}
          >
            Se déconnecter
          </button>

        </div>

      )}

    </div>

  );

}
